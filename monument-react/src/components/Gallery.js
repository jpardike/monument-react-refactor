import React from 'react';

import galleryImageOne from '../images/gallery_1.jpg';
import galleryImageTwo from '../images/gallery_2.jpg';
import galleryImageThree from '../images/gallery_3.jpg';
import galleryImageFour from '../images/gallery_4.jpg';
import galleryImageFive from '../images/gallery_5.jpg';
import galleryImageSix from '../images/gallery_6.jpg';



function Gallery() {
  
  return (
    <section id="gallery">
		<div className="wrap">
			<h2>Issue Twenty</h2>
			<h3>A visual guide to the Southwest</h3>
			<div className="masonry">
        <img src={galleryImageOne} alt="" />
				<img src={galleryImageThree} alt="" />
				<img src={galleryImageFour} alt="" />
				<img src={galleryImageTwo} alt="" />
				<img src={galleryImageFive} alt="" />
				<img src={galleryImageSix} alt="" />
			</div>
		</div>
	</section>
  );
}

export default Gallery;
