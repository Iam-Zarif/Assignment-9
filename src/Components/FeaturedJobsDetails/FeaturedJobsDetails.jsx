import React, { createContext } from 'react';
import { Link } from 'react-router-dom';

export const detailsData = createContext([])
const FeaturedJobsDetails = ({data}) => {
    let {
      id,
      company_logo,
      job_title,
      company_name,
      remote_or_onsite,
      fulltime_or_parttime,
      location,
      salary,
    } = data;
    return (
      <div className="border rounded-2xl mt-10 container">
        <detailsData.Provider value={data}>
          <div className="px-16 py-8">
            <img src={company_logo} alt="" />
            <p className="mt-8 text-lg font-bold">{job_title}</p>
            <p className=" mt-1 text-lg text-slate-400 font-semibold">
              {company_name}
            </p>
            <div className="flex gap-8 mt-3">
              <p className="text-indigo-600 border-indigo-600 border px-3 py-2 rounded-lg">
                {remote_or_onsite}
              </p>
              <p className="text-indigo-600 border-indigo-600 border px-3 py-2 rounded-lg">
                {fulltime_or_parttime}
              </p>
            </div>
            <div className="flex items-center gap-12  mt-5">
              <p className="font-semibold text-slate-500">{location}</p>
              <p className="font-semibold text-slate-500">Salary : {salary}</p>
            </div>
            <span className="inline-block border px-4 py-3 rounded-xl bg-indigo-500 text-white font-semibold mt-5">
              <Link to={`viewDetails/${id}`}>View Details</Link>
            </span>
          </div>
        </detailsData.Provider>
      </div>
    );
};

export default FeaturedJobsDetails;