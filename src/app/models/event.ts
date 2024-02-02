export type EventRead = boolean;

export type EventPerson = {
  avatar: string,
  fullName: string,
  link: string,
};

export type EventType = 'reaction' | 'follow' | 'unfollow' | 'joined' | 'left' | 'message' | 'comment';

export type EventOn = 'post' | 'person' | 'group' | 'picture';

export type EventToWhom = 'you' | {
  name: string,
  link: string
} | null;

export type EventContent = {
  value: string,
  link: string
} | null;

export type EventDate = string;

export type Event = {
  read: EventRead,
  person: EventPerson,
  type: EventType,
  on: EventOn,
  toWhom: EventToWhom,
  content: EventContent,
  date: EventDate
}
