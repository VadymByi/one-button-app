export interface ClickResponse {
  message: string;
  timestamp: string;
  status: "clicked" | "idle";
  clickCount: number;
}
