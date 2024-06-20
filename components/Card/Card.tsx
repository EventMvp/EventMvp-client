const Card = () => {
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
          alt="Shoes"
        />
      </figure>
      <div className="card-body p-4">
        <h2 className="card-title">
          Best Seller Book Storytelling
          <div className="badge badge-primary">FREE</div>
        </h2>
        <p></p>
        <p>Monday, 24 June 2024</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">Fashion</div>
          <div className="badge badge-outline">Products</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
