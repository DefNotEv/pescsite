import { getImagePath } from '@/utils/images';

export interface Member {
  id: number;
  name: string;
  role: string;
  image: string;
  committee: string;
  type: 'executive' | 'committee_head' | 'member';
  year: string;
  major: string;
}

export const members: Member[] = [
  // Executive Board
  {
    id: 1,
    name: 'Alex Johnson',
    role: 'President',
    image: getImagePath('/emma.jpg'),
    committee: 'Executive Board',
    type: 'executive',
    year: 'Senior',
    major: 'Mechanical Engineering'
  },
  {
    id: 2,
    name: 'Jamie Smith',
    role: 'Vice President',
    image: getImagePath('/emma.jpg'),
    committee: 'Executive Board',
    type: 'executive',
    year: 'Senior',
    major: 'Computer Engineering'
  },
  {
    id: 3,
    name: 'Taylor Wilson',
    role: 'Treasurer',
    image: getImagePath('/emma.jpg'),
    committee: 'Executive Board',
    type: 'executive',
    year: 'Junior',
    major: 'Industrial Engineering'
  },
  {
    id: 4,
    name: 'Morgan Lee',
    role: 'Secretary',
    image: getImagePath('/emma.jpg'),
    committee: 'Executive Board',
    type: 'executive',
    year: 'Junior',
    major: 'Biomedical Engineering'
  },
  
  // Committee Heads (9)
  {
    id: 5,
    name: 'Casey Kim',
    role: 'Head',
    image: getImagePath('/emma.jpg'),
    committee: 'Industrial Roundtable',
    type: 'committee_head',
    year: 'Senior',
    major: 'Civil Engineering'
  },
  {
    id: 6,
    name: 'Jordan Chen',
    role: 'Head',
    image: getImagePath('/emma.jpg'),
    committee: 'Expo',
    type: 'committee_head',
    year: 'Senior',
    major: 'Electrical Engineering'
  },
  {
    id: 7,
    name: 'Riley Martinez',
    role: 'Head',
    image: getImagePath('/emma.jpg'),
    committee: 'Campus Relations',
    type: 'committee_head',
    year: 'Junior',
    major: 'Chemical Engineering'
  },
  {
    id: 8,
    name: 'Drew Wilson',
    role: 'Head',
    image: getImagePath('/emma.jpg'),
    committee: 'Engineering Outreach',
    type: 'committee_head',
    year: 'Junior',
    major: 'Aerospace Engineering'
  },
  {
    id: 9,
    name: 'Sam Taylor',
    role: 'Head',
    image: getImagePath('/emma.jpg'),
    committee: 'Wellbeing',
    type: 'committee_head',
    year: 'Sophomore',
    major: 'Materials Engineering'
  },
  {
    id: 10,
    name: 'Jordan Lee',
    role: 'Head',
    image: getImagePath('/emma.jpg'),
    committee: 'Communications',
    type: 'committee_head',
    year: 'Senior',
    major: 'Computer Science'
  },
  {
    id: 11,
    name: 'Alex Morgan',
    role: 'Head',
    image: getImagePath('/emma.jpg'),
    committee: 'Internal Development',
    type: 'committee_head',
    year: 'Junior',
    major: 'Mechanical Engineering'
  },
  {
    id: 12,
    name: 'Taylor Smith',
    role: 'Head',
    image: getImagePath('/emma.jpg'),
    committee: 'Purdue in Indianapolis',
    type: 'committee_head',
    year: 'Senior',
    major: 'Industrial Engineering'
  },
  {
    id: 13,
    name: 'Casey Johnson',
    role: 'Head',
    image: getImagePath('/emma.jpg'),
    committee: 'Alumni Relations',
    type: 'committee_head',
    year: 'Senior',
    major: 'Civil Engineering'
  },
  
  // Regular Members (sample of 6, you can add more)
  ...Array.from({ length: 6 }, (_, i) => ({
    id: 14 + i,
    name: `Member ${i + 1}`,
    role: 'Member',
    image: getImagePath('/emma.jpg'),
    committee: ['Industrial Roundtable', 'Expo', 'Campus Relations', 'Engineering Outreach', 'Wellbeing', 'Communications', 'Internal Development', 'Purdue in Indianapolis', 'Alumni Relations'][i % 9],
    type: 'member' as const,
    year: ['Freshman', 'Sophomore', 'Junior', 'Senior'][Math.floor(Math.random() * 4)],
    major: ['Mechanical Engineering', 'Computer Engineering', 'Electrical Engineering', 'Civil Engineering', 'Chemical Engineering', 'Biomedical Engineering', 'Aerospace Engineering', 'Industrial Engineering', 'Materials Engineering', 'Computer Science'][Math.floor(Math.random() * 10)]
  }))
];
