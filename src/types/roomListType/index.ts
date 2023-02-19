export interface IheaderProp {
  startdate: string;
  enddate: string;
  profile: string;
}

export interface IbottomProp {
  id: string;
  leader: string;
  participant: string[];
}

export interface IroomList extends IheaderProp, IbottomProp {}
