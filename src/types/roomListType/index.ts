export interface headerProps {
  startdate: string;
  enddate: string;
  profile: string;
}

export interface bottomProps {
  id: string;
  leader: string;
  participant: string[];
}

export interface roomListProps extends headerProps, bottomProps {}
