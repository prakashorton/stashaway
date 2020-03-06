import React from "react";

function ProductItem(props) {
  const badge = (props && props['Top Ten'] && props['Top Ten'] != 'NaN') ? (<div className="shape">
    <div className="shape-text">top</div>
  </div>) : null;

  const top = badge == null ? (<span className='label label-warning'>No Ranking</span>) :
    (<span className='label label-success'>{props['Top Ten']}</span>);

  const stars = [
    <span className="fa fa-star" key="star1"></span>,
    <span className="fa fa-star" key="star2"></span>,
    <span className="fa fa-star" key="star3"></span>,
    <span className="fa fa-star" key="star4"></span>,
    <span className="fa fa-star" key="star5"></span>
  ];
  const ratings = stars.map((s, index) => {
    if (props.Stars >= (index + 1)) {
      s = React.cloneElement(s, { className: s.props.className + " " + 'checked' });
    }
    return s;
  });

  return (
    <div className="columns">
      {badge}
      <ul className="price">
        <li className="header">
          <p
            data-toggle="tooltip"
            title={props.Brand}
            style={{ whiteSpace: "nowrap", overflowX: "hidden" }}
          >
            {props.Brand}
          </p>
        </li>
        <li
          className="grey"
          data-toggle="tooltip"
          title={props.Variety}
          style={{ whiteSpace: "nowrap", overflowX: "hidden" }}
        >
          {props.Variety}
        </li>
        <li
          data-toggle="tooltip"
          title={props.Style}
          style={{ whiteSpace: "nowrap", overflowX: "hidden" }}
        >
          Style :
          <span className="label label-large label-pink">{props.Style}</span>
        </li>
        <li
          data-toggle="tooltip"
          title={props.Country}
          style={{ whiteSpace: "nowrap", overflowX: "hidden" }}
        >
          Country :
          <span className="label label-large label-purple">{props.Country}</span>
        </li>
        <li>
          {top}
        </li>
        <li className="grey">
          {ratings}
        </li>
      </ul>
    </div>
  );
}

export default ProductItem;
