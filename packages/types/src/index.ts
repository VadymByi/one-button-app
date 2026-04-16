export interface ClickResponse {
  message: string;
  timestamp: string;
  status: "clicked" | "idle";
  clickCount: number;
}
export interface ClickActionResponse {
  id: string;
  status: "IDLE" | "CLICKED";
  message: string;
  payload: {
    lastClickedAt: string | null;
    clickCount: number;
    processedBy: string;
  };
  serverInfo: {
    version: string;
    environment: string;
  };
}
