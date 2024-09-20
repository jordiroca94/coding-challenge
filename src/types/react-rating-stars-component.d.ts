declare module 'react-rating-stars-component' {
    import { Component } from 'react';
  
    interface ReactStarsProps {
      count?: number;
      value?: number;
      onChange?: (newValue: number) => void;
      size?: number;
      color?: string;
      activeColor?: string;
      edit?: boolean;
      isHalf?: boolean;
    }
  
    class ReactStars extends Component<ReactStarsProps> {}
  
    export default ReactStars;
  }