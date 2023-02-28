export interface headerProps {
  id: string;
  startDate: string;
  endDate: string;
  profile: string;
}

export interface bottomProps {
  id: string;
  leader: string;
  title: string;
  participant: string[];
}

export interface roomListProps extends headerProps, bottomProps {}
