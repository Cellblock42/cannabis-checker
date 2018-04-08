import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
 
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  qrData = null;
  scannedCode = null;
  validCode = false;
  invalidCode = false;
 
  constructor(private barcodeScanner: BarcodeScanner) { }
 
  scanCode() {
    this.barcodeScanner.scan().then(barcodeData => {
    	if (barcodeData.cancelled) {
    		this.scannedCode = null;
    		this.validCode = null;
    		this.invalidCode = null;
    	} else {
	      this.scannedCode = barcodeData.text;
	      if (this.scannedCode == "782458") {
	      	this.validCode = true;
	      	this.invalidCode = false;
	      } else {
	      	this.invalidCode = true;
	      	this.validCode = false;
	      }
	    }
    }, (err) => {
        console.log('Error: ', err);
    });
  }

  reset() {
  	this.scannedCode = null;
  	this.validCode = null;
  	this.invalidCode = null;
  }
 
}