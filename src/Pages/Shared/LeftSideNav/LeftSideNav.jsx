import { data } from "autoprefixer";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GoCalendar } from "react-icons/go";
import bayern from '../../../assets/1.png';
import bayern2 from '../../../assets/2.png';
import bayern3 from '../../../assets/3.png';

const LeftSideNav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <div className="space-y-6">
      <h1 className="text-2xl">All Categories</h1>
      {categories.map((category) => (
        <Link
          className="block ml-4 text-xl font-bold"
          key={category.id}
          to={`/category/${category.id}`}
        >
          {category.name}
        </Link>
      ))}

      <div className="card w-96 bg-base-100 shadow-none">
        <figure>
          <img
            src={bayern}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
          Bayern Slams Authorities Over Flight Delay to Club World Cup
          </h2>
          <div className="card-actions flex justify-between mt-4">
            <div className="text-xl">Sports</div>
            <div className="text-xl flex justify-center items-center">
              <GoCalendar></GoCalendar>
              Jan 4, 2022
            </div>
          </div>
        </div>
      </div>

      <div className="card w-96 bg-base-100 shadow-none">
        <figure>
          <img
            src={bayern2}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
          Bayern Slams Authorities Over Flight Delay to Club World Cup
          </h2>
          <div className="card-actions flex justify-between mt-4">
            <div className="text-xl">Sports</div>
            <div className="text-xl flex justify-center items-center">
              <GoCalendar></GoCalendar>
              Jan 4, 2022
            </div>
          </div>
        </div>
      </div>

      <div className="card w-96 bg-base-100 shadow-none">
        <figure>
          <img
            src={bayern2}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
          Bayern Slams Authorities Over Flight Delay to Club World Cup
          </h2>
          <div className="card-actions flex justify-between mt-4">
            <div className="text-xl">Sports</div>
            <div className="text-xl flex justify-center items-center">
              <GoCalendar></GoCalendar>
              Jan 4, 2022
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSideNav;
