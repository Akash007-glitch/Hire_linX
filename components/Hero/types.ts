export interface CandidateReview {
  id: string;
  name: string;
  roleOrStatus: string;
  rating: number;
  avatar: string;
  shapeVariant: 'cut-br' | 'cut-tl' | 'cut-tr' | 'standard';
  cardLayout: 'vertical' | 'horizontal';
  positionClass: string;
  animationDelay?: string;
}

export interface NavLink {
  label: string;
  href: string;
}
