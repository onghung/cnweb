function renderStars(rating) {
    const stars = [];
    const fullStars = Math.floor(rating);
    const halfStar = rating - fullStars >= 0.5;
    for (let i = 0; i < fullStars; i++) {
        stars.push(<span key={i} className="star fa fa-star checked"></span>);
    }
    if (halfStar) {
        stars.push(<span key="half" className="star fa fa-star-half checked"></span>);
    }
    return stars;
}

export default renderStars;
