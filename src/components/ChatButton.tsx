
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { X } from "lucide-react";

const ChatButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLineClick = () => {
    // 這裡可以添加 LINE 的連結邏輯
    console.log("開啟 LINE");
  };

  return (
    <>
      {/* 聊天按鈕 */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(true)}
          className="w-16 h-16 rounded-full bg-blue-400 hover:bg-blue-500 shadow-lg"
        >
          <div className="flex space-x-1">
            <div className="w-2 h-2 bg-white rounded-full"></div>
            <div className="w-2 h-2 bg-white rounded-full"></div>
            <div className="w-2 h-2 bg-white rounded-full"></div>
          </div>
        </Button>
      </div>

      {/* 對話框 */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-md bg-blue-400 text-white border-0">
          <DialogHeader>
            <div className="flex items-center justify-between">
              <DialogTitle className="text-white text-lg font-bold">
                Healixir-為你的健康量身推薦的保健食品
              </DialogTitle>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(false)}
                className="text-white hover:bg-blue-500 p-1"
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
          </DialogHeader>
          
          <div className="mt-4">
            <div className="space-y-3">
              {/* LINE 按鈕 */}
              <Button
                onClick={handleLineClick}
                className="w-full bg-white text-black hover:bg-gray-100 justify-start p-4 h-auto"
              >
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-sm">LINE</span>
                </div>
                開啟 LINE 對話
              </Button>
            </div>

            {/* QR Code 區域 */}
            <div className="mt-6 text-center">
              <div className="w-32 h-32 bg-white mx-auto rounded-lg flex items-center justify-center">
                <div className="text-black text-xs">LINE QR Code</div>
              </div>
              <p className="text-xs mt-2 opacity-75">掃描 QR Code 加入 LINE</p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ChatButton;
