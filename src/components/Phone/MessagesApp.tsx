import { ReactNode, forwardRef } from 'react';

interface MessagesAppProps {
  children?: ReactNode;
  name?: string;
}

export const MessagesApp = forwardRef<HTMLDivElement, MessagesAppProps>(({ children, name = '涂專員' }, ref) => {

  return (
    <div className="messages-app" ref={ref}>
      <div className="app-header">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined">arrow_back_ios_new</span>
          <span className="text-lg font-medium">{name}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined">search</span>
          <span className="material-symbols-outlined">call</span>
          <span className="material-symbols-outlined">density_medium</span>
        </div>
      </div>
      {children}
      <div className="app-footer">
        <span className="material-symbols-outlined">add_2</span>
        <span className="material-symbols-outlined">photo_camera</span>
        <span className="material-symbols-outlined">image</span>
        <div className="flex justify-between w-full rounded-full bg-gray-300/50 px-2 py-1 ml-1">
          <span className="material-symbols-outlined">match_case</span>
          <span className="material-symbols-outlined">sentiment_neutral</span>
        </div>
        <span className="material-symbols-outlined">mic</span>
      </div>
    </div>
  );
}); 