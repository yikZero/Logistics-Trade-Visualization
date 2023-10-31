import { useEffect, useState } from "react";

function StarChainDialog() {

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === 'Digit1') {
        setIsOpen(true);
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [setIsOpen]);

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="bg-gray-900 p-6 rounded"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-gray-100 text-lg font-semibold mb-4">
              上链相关信息
            </div>
            <div className="flex flex-col gap-2 text-gray-200">
              <div>上链时间：2023-10-29 22:43:40</div>
              <div>区块高度：54192</div>
              <div>
                所在区块：0x2878cebd31c978dfbdcad3d3ccef456f7d4d5545e35a3a5f7491e5f97353fa73
              </div>
              <div>
                交易哈希：0x80ec76d09cb088d7b4e37cc88f785722d19315e62e11c73235441990f9d1741a
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="h-8 px-4 mt-6 text-gray-200 border border-gray-500 rounded"
            >关闭</button>
          </div>
        </div>
      )}
    </>
  );
}

export default StarChainDialog;
