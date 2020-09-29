import { MaterialModule } from './material.module';
import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table/public-api';

export interface AccountsTypes { 
	identity: string;
	name: string;
	available_cash: string;
	cash: number;
	today_change: string;
	positive: boolean;
}


const ACCOUNTS_DATA: AccountsTypes[] = [
	{
		identity: '0029',
		name: 'AAA',
		available_cash: '39,160,334.42',
		cash: 39160334,
		today_change: '0.07% / $31, 435,87',
		positive: false
	},
	{
		identity: '0146' ,
		name: 'IRA',
		available_cash: '15,884,302.39',
		cash: 15884302,
		today_change: '0.03% / $7,430.83',
		positive: true
	},
	{
		identity: '1812' ,
		name: 'AAA',
		available_cash: '2,010,926.10',
		cash: 2010926,
		today_change: '0.21% / $38,881.63',
		positive: true
	},
	

	
];


const secondPush: AccountsTypes[] = [
{
		identity: '2019',
		name: 'REG',
		available_cash: '13,465,679.34',
		cash: 13465679,
		today_change: '0.00% / $0.00',
		positive: null
	},
	{
		identity: '3810',
		name: 'AAA',
		available_cash: '10,050,054.07',
		cash: 10050054,
		today_change: '0.08% / $8,916,69',
		positive: true
	},
	{
		identity: '5200',
		name: 'IRA',
		available_cash: '5,763.36',
		cash: 57630,
		today_change: '0.07% / $8,916,69',
		positive: false
	},
		{
		identity: '0029',
		name: 'AAA',
		available_cash: '39,160,334.42',
		cash: 39160334,
		today_change: '0.07% / $31, 435,87',
		positive: false
	},
	{
		identity: '0146' ,
		name: 'IRA',
		available_cash: '15,884,302.39',
		cash: 15884302,
		today_change: '0.03% / $7,430.83',
		positive: true
	},
	{
		identity: '1812' ,
		name: 'AAA',
		available_cash: '2,010,926.10',
		cash: 2010926,
		today_change: '0.21% / $38,881.63',
		positive: true
	},
	];


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
	sort: MatSort;
	ngAfterViewInit(): void {
		throw new Error("Method not implemented.");
	}
buttonClicked: boolean;
title = 'cvs-assignment';
hideAccountId = true;
displayedColumns: string[] = ['identity',  'cash'];
dataSource = new MatTableDataSource(ACCOUNTS_DATA);

@ViewChild(MatSort, {static: false})

setStatus(check: boolean){
	switch (check) {
 		case true :
 			return '+';
 		case false :
 			return '-';
 		case null :
 			return '';	
 	}
}

 setColor(change) {
 	console.log('setColor()')
 	switch (change) {
 		case true :
 			return 'green';
 		case false :
 			return 'red';
 		case null :
 			return 'gray';	
 	}
 }

 loadMoreAccounts() {
 	console.log(' Clicking the loadMoreAccounts Button');
     this.dataSource = new MatTableDataSource(secondPush);
     this.buttonClicked = false;
     console.log(this.buttonClicked);
 }

  ngOnInit() {
 
     this.buttonClicked = true;

    this.dataSource.sort = this.sort;
      	console.log(this.dataSource);
  }

}	
