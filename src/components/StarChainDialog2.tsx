import { useEffect, useState } from "react";

function StarChainDialog2() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === "Digit2") {
        setIsOpen(true);
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
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
              审核信息
            </div>
            <table className="min-w-full text-gray-200 border-collapse border border-gray-400">
              <tbody>
                <tr className="border-b border-gray-300">
                  <td className="p-2 border-r border-gray-300">审核结果</td>
                  <td className="p-2">通过</td>
                </tr>
                <tr className="border-b border-gray-300">
                  <td className="p-2 border-r border-gray-300">审核意见</td>
                  <td className="p-2">无</td>
                </tr>
                <tr className="border-b border-gray-300">
                  <td className="p-2 border-r border-gray-300">审核人</td>
                  <td className="p-2">
                    山东高速齐鲁号欧亚班列运营有限公司青岛分公司自动查验
                  </td>
                </tr>
                <tr className="border-b border-gray-300">
                  <td className="p-2 border-r border-gray-300">审核时间</td>
                  <td className="p-2">2023-10-29 22:43:44</td>
                </tr>
              </tbody>
            </table>
            <button
              onClick={() => setIsOpen(false)}
              className="h-8 px-4 mt-6 text-gray-200 border border-gray-500 rounded"
            >
              关闭
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default StarChainDialog2;
