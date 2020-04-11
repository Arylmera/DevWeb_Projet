import {Component, Inject, OnInit} from '@angular/core';
import {MAT_BOTTOM_SHEET_DATA} from "@angular/material/bottom-sheet";
import {PointsService} from "../../services/points/points.service";
import {HttpClient} from "@angular/common/http";
import {MapsService} from "../../services/maps/maps.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-point-sheet',
  templateUrl: './point-sheet.component.html',
  styleUrls: ['./point-sheet.component.scss']
})
export class PointSheetComponent implements OnInit {

  point: any;
  html: any;
  ready = false;
  wikiDesc: any = null;
  wikiDescImg: any = null;

  constructor(@Inject(MAT_BOTTOM_SHEET_DATA) public data: any,
              private pointsService: PointsService,
              private mapsService: MapsService,
              private router: Router,
              private http: HttpClient) {}

  ngOnInit(): void {
    this.ready = false;
    this.pointsService.recupPointById(this.data).subscribe( pointData => {
      this.point = pointData[0];
      this.ready = true;
      this.getDescriptionWiki(this.point.namePoint)
    });
  }

  /**
   * ouverture page wiki du point
   * @param name
   */
  goToWiki(name: any) {
    let url = "https://fr.wikipedia.org//w/api.php?action=opensearch&format=json&origin=*&search="+this.nameParser(name)+"&limit=1&format=json";
    this.http.get(url).subscribe( data => {
      if(data[3]){
        let wikiUrl = data[3];
        window.open(wikiUrl, '_bank');
      }
    });
  }

  /**
   * récupération de la description depuis le site wikipedia FR et de sont image
   * @param name
   */
  getDescriptionWiki(name: any){
    let urlDesc = "https://fr.wikipedia.org/api/rest_v1/page/summary/"+this.nameParser(name);
    this.http.get(urlDesc).subscribe(
      data => {
        // @ts-ignore
        this.wikiDesc = data.extract;
        // @ts-ignore
        this.wikiDescImg = data.thumbnail.source;
        console.log(this.wikiDescImg);
        this.router.navigate(['/map']);
      },
      error => {
        console.log(error.status + " no page found");
        this.wikiDesc = "Désolé nous n'avons pas trouvé de page wikipedia"
      },
      () => {
        this.router.navigate(['/map']);
      }
    );
  }

  /**
   * parsing du nom pour le rendre utilisable avec un URL
   * @param name
   */
  nameParser(name: any){
    return encodeURIComponent(name.trim());
  }
}
