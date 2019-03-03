export interface categoryData {
  category: String;
  designation: String[];
}
export interface genreData {
  category: String;
  designation: String;
}
export interface designationData {
  designation: String[];
}
export interface loginData {
  email: string;
  password: string;
}
export interface loginDetailData {
  token: object;
}
export interface interviewerData {
  _id: String;
  category: String;
  designation: string;
  email: String;
  password: String;
}
export interface jobData {
  _id: String;
  jobId: Number;
  category: String;
  designation: String;
  description: String;
  blockJobId: Number[];
  lastDate: Date;
  isOpen: Boolean;
  paySalary: Number;
  location: String;
  bondDetail: String;
  experienceMonth: Number;
  experienceYear: Number;
  skillsRequired: [{ skillName: String; skillLevel: String }];
  isComplete: Boolean;
}
export interface scheduleData {
  _id: string;
  candidateId: string;
  jobId: string;
  date: Date;
  time: number;
  comment: string;
  interviewerId: string;
  status: string;
}
export class assignData {
  constructor(public candidateId: string, public jobId: string) {}
}
export class closeData {
  constructor(
    public candidateId: string,
    public jobId: string,
    public closeStatus: string
  ) {}
}
export interface appliedJobData {
  jobId: {
    _id: string;
    category: string;
    designation: string;
    description: string;
  };
  candidateId: string;
  status: string;
}
export interface appliedData {
  candidateId: {
    _id: string;
    name: string;
    email: string;
  };
  jobId: string;
  status: string;
}
export interface candidateData {
  _id: string;
  name: String;
  email: String;
  password: String;
  phoneNumber: Number;
  experienceMonth: Number;
  experienceYear: Number;
  isVerified: {
    otp: Boolean;
    email: Boolean;
  };
  employeer: [
    {
      prevEmployeer: String;
      joiningDate: Date;
      leavingdate: Date;
      role: String;
    }
  ];
  educational: [
    {
      degree: String;
      completionDate: Date;
      college: String;
    }
  ];
  defaultResumeLink: String;
  resumeLink: String[];
  video: String;
  isActive: Boolean;
}
