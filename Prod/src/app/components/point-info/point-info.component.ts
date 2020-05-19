import {Component, OnInit} from '@angular/core';
import {PointListComponent} from '../point-list/point-list.component';
import {ActivatedRoute, Router} from '@angular/router';
import {Point, PointsService} from '../../services/points/points.service';
import {HttpClient} from '@angular/common/http';
import {faTree} from '@fortawesome/free-solid-svg-icons/faTree';

@Component({
  selector: 'app-point-info',
  providers: [PointListComponent],
  templateUrl: './point-info.component.html',
  styleUrls: ['./point-info.component.scss']
})

export class PointInfoComponent implements OnInit {

  faTree = faTree;
  point: Point;
  wikiDesc: any = null;
  wikiDescImg: any = null;
  numPoint: number = null;
  wiki = false;
  loading = true;

  constructor(private pointList: PointListComponent,
              private route: ActivatedRoute,
              private pointsService: PointsService,
              private router: Router,
              private http: HttpClient) { }

  ngOnInit(): void {
    this.numPoint = Number(this.route.snapshot.params.id);
    this.pointsService.recupPointById(this.numPoint).subscribe( data => {
      this.point = data[0];
      this.getDescriptionWiki(this.point.namePoint);
      this.loading = false;
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
        this.wiki = true;
        // @ts-ignore
        this.wikiDesc = data.extract;
        // @ts-ignore
        this.wikiDescImg = data.thumbnail.source;
      },
      error => {
        console.log(error.status + ' no page found');
        this.wikiDesc = 'Désolé nous n\'avons pas trouvé de page wikipedia';
      },
      () => {
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

}
