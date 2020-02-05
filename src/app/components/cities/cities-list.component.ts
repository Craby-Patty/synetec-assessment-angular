import { Component, OnInit, TemplateRef } from "@angular/core";
import { ICity } from "../../models/city.model";
import { CitiesEndpoint } from "../../services/cities/cities-endpoint.service";
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';


@Component({
  selector: 'cities-list',
  templateUrl: './cities-list.component.html',
  styleUrls: ['./cities-list.component.css']
})

export class CitiesListComponent implements OnInit {

  cities: ICity[];
  faTrash = faTrash;
  modalRef: BsModalRef;
  cityID = 0;

  constructor(private _citiesEndPoint: CitiesEndpoint, private modalService: BsModalService) { }

  ngOnInit(): void {
    this.getCities();
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, { class: 'modal-sm' });
    console.log(this.cityID);
  }

  confirm(): void {
    console.log('Del Confirmed');
    this.delCity();
    this.modalRef.hide();
  }

  decline(): void {
    console.log('Del Cancelled');
    this.modalRef.hide();
  }

  getCities() {
    this._citiesEndPoint.getCities()
      .subscribe((res: any) => {
        if (res != null) {
          console.log(res);
          this.cities = res;
        } else {
          console.log('Cities Null return');
        }
      });
  }

  delCity() {
    this._citiesEndPoint.delCity(this.cityID)
      .subscribe((res: any) => {
        const index = this.cityID - 1;
        this.cities.splice(index, 1);
      });
  }
}
