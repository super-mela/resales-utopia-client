import React from "react";
import TopBanner from "../../../components/TopBanner/TopBanner";

const MyBuyers = () => {
  return (
    <div>
      <TopBanner>My Buyers</TopBanner>
      <div className="px-24 py-5 font-urbanist text-secondary">
        <div className="container p-2 mx-auto sm:p-4">
          <h2 className="mb-4 text-2xl font-semibold leading-tight">Buyers</h2>
          <div className="overflow-x-auto border">
            <table className="min-w-full text-xs">
              {/* <colgroup>
				<col>
				<col>
				<col>
				<col>
				<col>
				<col className="w-24">
			</colgroup> */}
              <thead className="bg-secondary text-white">
                <tr className="text-left">
                  <th className="p-3">Invoice</th>
                  <th className="p-3">Client</th>
                  <th className="p-3">Email</th>
                  <th className="p-3">Phone</th>
                  <th className="p-3 text-right">Location</th>
                  <th className="p-3">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-opacity-20 border-gray-700 ">
                  <td className="p-3">
                    <p>97412378923</p>
                  </td>
                  <td className="p-3">
                    <p>Microsoft Corporation</p>
                  </td>
                  <td className="p-3">
                    <p>14 Jan 2022</p>
                    <p className="text-gray-400">Friday</p>
                  </td>
                  <td className="p-3">
                    <p>01 Feb 2022</p>
                    <p className="text-gray-400">Tuesday</p>
                  </td>
                  <td className="p-3 text-right">
                    <p>$15,792</p>
                  </td>
                  <td className="p-3 text-right">
                    <span className="px-3 py-1 font-semibold rounded-md bg-violet-400 text-gray-900">
                      <span>Pending</span>
                    </span>
                  </td>
                </tr>
                <tr className="border-b border-opacity-20 border-gray-700 ">
                  <td className="p-3">
                    <p>97412378923</p>
                  </td>
                  <td className="p-3">
                    <p>Tesla Inc.</p>
                  </td>
                  <td className="p-3">
                    <p>14 Jan 2022</p>
                    <p className="text-gray-400">Friday</p>
                  </td>
                  <td className="p-3">
                    <p>01 Feb 2022</p>
                    <p className="text-gray-400">Tuesday</p>
                  </td>
                  <td className="p-3 text-right">
                    <p>$275</p>
                  </td>
                  <td className="p-3 text-right">
                    <span className="px-3 py-1 font-semibold rounded-md bg-violet-400 text-gray-900">
                      <span>Pending</span>
                    </span>
                  </td>
                </tr>
                <tr className="border-b border-opacity-20 border-gray-700 ">
                  <td className="p-3">
                    <p>97412378923</p>
                  </td>
                  <td className="p-3">
                    <p>Coca Cola co.</p>
                  </td>
                  <td className="p-3">
                    <p>14 Jan 2022</p>
                    <p className="text-gray-400">Friday</p>
                  </td>
                  <td className="p-3">
                    <p>01 Feb 2022</p>
                    <p className="text-gray-400">Tuesday</p>
                  </td>
                  <td className="p-3 text-right">
                    <p>$8,950,500</p>
                  </td>
                  <td className="p-3 text-right">
                    <span className="px-3 py-1 font-semibold rounded-md bg-violet-400 text-gray-900">
                      <span>Pending</span>
                    </span>
                  </td>
                </tr>
                <tr className="border-b border-opacity-20 border-gray-700 ">
                  <td className="p-3">
                    <p>97412378923</p>
                  </td>
                  <td className="p-3">
                    <p>Nvidia Corporation</p>
                  </td>
                  <td className="p-3">
                    <p>14 Jan 2022</p>
                    <p className="text-gray-400">Friday</p>
                  </td>
                  <td className="p-3">
                    <p>01 Feb 2022</p>
                    <p className="text-gray-400">Tuesday</p>
                  </td>
                  <td className="p-3 text-right">
                    <p>$98,218</p>
                  </td>
                  <td className="p-3 text-right">
                    <span className="px-3 py-1 font-semibold rounded-md bg-violet-400 text-gray-900">
                      <span>Pending</span>
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyBuyers;
