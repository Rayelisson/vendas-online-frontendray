/* eslint-disable prettier/prettier */


export type NotificationEnum = 'success' | 'info' | 'warning' | 'error';

export interface NotificationType {
  message: string;
  type: NotificationEnum;
  description?: string;
}
