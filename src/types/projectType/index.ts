export interface anchorValue {
  anchorCol: number;
  anchorRow: number;
  startRow: number;
  anchorChecked: boolean;
}

export interface cellProps {
  id: string;
  checked: boolean;
  time: number;
  col: number;
  row: number;
  onMouseOver: (e: any) => void;
  onMouseDown: (e: any) => void;
}

export interface cellInfo {
  time: number;
  checked: boolean;
}
