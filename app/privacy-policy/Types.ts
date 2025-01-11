export interface Section {
  effectiveDate: string;
  sections: {
    title: string;
    content: string;
    list?: string[];
    link?: string;
  }[];
}
