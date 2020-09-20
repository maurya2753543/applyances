import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  zoom: number = 8;
  
  // initial center position for the map
  lat: number = 51.673858;
  lng: number = 7.815982;

  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`)
  }

  icon1 = {
	url: 'assets/images/circle.png',
	scaledSize: {
	  width: 60,
	  height: 80
	}
}
icon2 = {
	url: 'assets/images/circle1.png',
	scaledSize: {
	  width: 60,
	  height: 80
	}
}
icon3 = {
	url: 'assets/images/circle2.png',
	scaledSize: {
	  width: 60,
	  height: 80
	}
}
icon4 = {
	url: 'assets/images/circle3.png',
	scaledSize: {
	  width: 60,
	  height: 80
	}
}
icon5 = {
	url: 'assets/images/circle4.png',
	scaledSize: {
	  width: 60,
	  height: 80
	}
}
icon6 = {
	url: 'assets/images/circle5.png',
	scaledSize: {
	  width: 60,
	  height: 80
	}
}
icon7 = {
	url: 'assets/images/circle6.png',
	scaledSize: {
	  width: 60,
	  height: 80,
	  
	}
}
icon8 = {
	url: 'assets/images/circle7.png',
	scaledSize: {
	  width: 60,
	  height: 80,
	  
	}
}
icon9 = {
	url: 'assets/images/big.png',
	scaledSize: {
	  width: 350,
	  height: 150,
	  
	}
}
iconb = {
	url: 'assets/images/big.jpg',
	scaledSize: {
	  width: 60,
	  height: 80,
	  
	}
}
  
  markerDragEnd(m: marker, $event: MouseEvent) {
    console.log('dragEnd', m, $event);
  }
  
  markers: marker[] = [
	  {
		  lat: 52.677,
		  lng: 7.06,
		  logo: 'A',
		  icon: 'assets/images/image6.jpg',
		  draggable: true
	  }
  ]
  m: marker[] = [
	{
		lat: 51.88,
		lng: 7.11,
		logo: 'A',
		icon: 'assets/images/image6.jpg',
		draggable: true
	}
]
n: marker[] = [
	{
		lat: 51.788,
		lng: 7.0008,
		logo: 'A',
		icon: 'assets/images/image6.jpg',
		draggable: true
	}
]
o: marker[] = [
	{
		lat: 51.7,
		lng: 7.9582,
		logo: 'A',
		icon: 'assets/images/image6.jpg',
		draggable: true
	}
]
p: marker[] = [
	{
		lat: 52.673858,
		lng: 7.815982,
		logo: 'A',
		icon: 'assets/images/image6.jpg',
		draggable: true
	}
]
l: marker[] = [
	{
		lat: 51.3338,
		lng: 7.78882,
		logo: 'A',
		icon: 'assets/images/image6.jpg',
		draggable: true
	}
]
a: marker[] = [
	{
		lat: 51.9,
		lng: 5.3,
		logo: 'A',
		icon: 'assets/images/image6.jpg',
		draggable: true
	}
]
b: marker[] = [
	{
		lat: 51.600323858,
		lng: 7.008982,
		logo: 'A',
		icon: 'assets/images/image6.jpg',
		draggable: true
	}
]
biggest: marker[] = [
	{
		lat: 50.786,
		lng: 7.008982,
		logo: 'A',
		icon: 'assets/images/big.png',
		draggable: true
	}
]
}

// just an interface for type safety.
interface marker {
	lat: number;
	lng: number;
	logo: any;
	icon:any;
	draggable: boolean;
}




