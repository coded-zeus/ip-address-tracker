import React from "react";

const AddressInfo = ({ realIpAddress }) => {
  return (
    <React.Fragment>
      <div className="bg-white rounded-lg mt-[20px] py-[15px] px-[30px] flex flex-col justify-center items-center gap-6 mb-[40px]">
        <div className="flex flex-col justify-center items-center">
          <p className="font-extrabold text-sm text-gray-400">IP ADDRESS</p>
          <p className="font-bold text-lg">{realIpAddress.ip}</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <p className="font-extrabold text-sm text-gray-400">LOCATION</p>
          <p className="font-bold text-lg">
            {realIpAddress.location.region}, {realIpAddress.location.country}
          </p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <p className="font-extrabold text-sm text-gray-400">TIMEZONE</p>
          <p className="font-bold text-lg">
            UTC {realIpAddress.location.timezone}
          </p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <p className="font-extrabold text-sm text-gray-400">ISP</p>
          <p className="font-bold text-lg">{realIpAddress.isp}</p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AddressInfo;
