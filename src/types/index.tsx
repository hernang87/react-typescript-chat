export interface ChatAction {
  type: string;
  payload: TypingAction | SendAction;
}

export interface TypingAction {
  user: string;
  id?: string;
  message?: string;
}

export interface SendAction {
  id: string;
  user: string;
  message: string;
}

export interface MessageSent {
  id: string;
  user: string;
  message: string;
}

export interface Message {
  id: string;
  user: string;
  text: string;
  sent: boolean;
  read: boolean;
  time: string;
}

export interface ChatState {
  messages: Message[];
  isTyping: string | null;
}

export interface StoreState {
  chat: ChatState
};