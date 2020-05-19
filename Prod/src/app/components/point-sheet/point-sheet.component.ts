import {Component, Inject, OnInit} from '@angular/core';
import {MAT_BOTTOM_SHEET_DATA} from '@angular/material/bottom-sheet';
import {PointsService} from '../../services/points/points.service';
import {HttpClient} from '@angular/common/http';
import {MapsService} from '../../services/maps/maps.service';
import {Router} from '@angular/router';
import {ChangeDetectorRef} from '@angular/core';
import {faTree} from '@fortawesome/free-solid-svg-icons/faTree';

@Component({
  selector: 'app-point-sheet',
  templateUrl: './point-sheet.component.html',
  styleUrls: ['./point-sheet.component.scss']
})
export class PointSheetComponent implements OnInit {

  faTree = faTree;
  point: any;
  html: any;
  ready = false;
  wikiDesc: any = null;
  wikiDescImg: any = null;

  constructor(@Inject(MAT_BOTTOM_SHEET_DATA) public data: any,
              private pointsService: PointsService,
              private mapsService: MapsService,
              private router: Router,
              private http: HttpClient,
              private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.ready = false;
    this.pointsService.recupPointById(this.data).subscribe( pointData => {
      this.point = pointData[0];
      this.ready = true;
      this.getDescriptionWiki(this.point.namePoint);
    });
  }

  /**
   * ouverture page wiki du point
   * @param name
   */
  goToWiki(name: any) {
    // tslint:disable-next-line:max-line-length
    const url = 'https://fr.wikipedia.org//w/api.php?action=opensearch&format=json&origin=*&search=' + this.nameParser(name) + '&limit=1&format=json';
    this.http.get(url).subscribe( data => {
      if (data[3]) {
        const wikiUrl = data[3];
        window.open(wikiUrl, '_bank');
      }
    });
  }

  /**
   * récupération de la description depuis le site wikipedia FR et de sont image
   * @param name
   */
  getDescriptionWiki(name: any) {
    const urlDesc = 'https://fr.wikipedia.org/api/rest_v1/page/summary/' + this.nameParser(name);
    this.http.get(urlDesc).subscribe(
      data => {
        this.cdr.markForCheck();
        // @ts-ignore
        this.wikiDesc = data.extract;
        // @ts-ignore
        this.wikiDescImg = data.thumbnail.source;
        this.router.navigate(['/map']);
      },
      error => {
        console.log(error.status + ' no page found');
        this.wikiDesc = 'Désolé nous n\'avons pas trouvé de page wikipedia';
      },
      () => {
        this.router.navigate(['/map']);
        this.cdr.markForCheck();
      }
    );
  }

  /**
   * parsing du nom pour le rendre utilisable avec un URL
   * @param name
   */
  nameParser(name: any) {
    return encodeURIComponent(name.trim());
  }

  /**
   * ajout du point dans la liste des points de route
   */
  addToRoute() {
    this.mapsService.addRoutingPoint(this.point.idPoint);
  }

  /**
   * fermeture de la sheet
   */
  dissmissSheet() {
    this.mapsService.dismissSheet();
  }
}
