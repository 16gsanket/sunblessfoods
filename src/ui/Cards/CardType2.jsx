import React from 'react';

const CardType2 = () => {
  return (
    <div className="w-[380px] h-[478px] rounded-[8px] shadow-md overflow-hidden border border-blue-100">
      {/* Header */}
      <div className="w-full h-[112px] bg-[#f26336] flex items-center justify-center">
        <h2 className="text-white text-xl font-bold">Quality Assurance</h2>
      </div>

      {/* Body */}
      <div className="w-full h-[366px] bg-[#fef8e6] p-6 text-black text-base leading-relaxed">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
          fringilla, velit non eleifend dapibus, lorem mauris tincidunt lorem,
          non condimentum augue justo sed nulla. Pellentesque habitant morbi
          tristique senectus.
        </p>
      </div>
    </div>
  );
};

export default CardType2;
