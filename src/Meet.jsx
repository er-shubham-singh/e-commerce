import React, { useState } from 'react';
import {MeetMember} from "./DATA VISIBILE/DataVisible"

// Your MeetMember data


let Meet = () => {
  // State for currently selected member
  let [selectedMember, setSelectedMember] = useState(MeetMember[0]);

  // Function to handle click and update the selected member
  let handleMemberClick = (index) => {
    setSelectedMember(MeetMember[index]);
  };

  return (
    <div className="bg-[#f3f3f3] my-14">
      <div className="max-w-[1320px] mx-auto py-14 grid grid-cols-[29%_auto] gap-[30px]">
        <div>
          <h1 className="pe-9 uppercase text-[#226fa5] text-[40px] font-bold leading-[55px]">
            Meet our Board Member
          </h1>
          <p className="pe-8 text-[18px] leading-[21px] text-[#5a5454]">
            Within the premises of the Sushma Township are reputed Schools.
          </p>
        </div>
        <div>
          <div className="grid grid-cols-[70%_20%] gap-[10%]">
            <div className="">
              <div className="flex items-center gap-[30px] ">
                <div className="rounded-full">
                  <img
                    className="rounded-full h-[120px] w-[120px]"
                    src={selectedMember.thumbnail}
                    alt={selectedMember['sub-part'][0].name}
                  />
                </div>
                <div>
                  <h1>{selectedMember['sub-part'][0].name}</h1>
                  <p>{selectedMember['sub-part'][0].position.toUpperCase()}</p>
                </div>
              </div>
              <p className="bg-[#226fa5] text-white text-[17px] leading-[26px] text-left ps-14 pe-20 mt-10 rounded-2xl py-10">
                {selectedMember['sub-part'][0].description}
              </p>
            </div>

            <div className="">
              <div className="grid justify-center">
                <div className="rounded-full mb-5">
                  {MeetMember.length > 0
                    ? MeetMember.map((item, index) => (
                        <img
                          key={index}
                          onClick={() => handleMemberClick(index)}
                          className="rounded-full h-[120px] w-[120px] mb-4 cursor-pointer"
                          src={item.thumbnail}
                          alt={item['sub-part'][0].name}
                        />
                      ))
                    : ''}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Meet;
