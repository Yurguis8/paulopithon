import trainerAim1 from '../assets/images/trainer/trainer-aim-1.jpg';
import trainerStanding from '../assets/images/trainer/trainer-standing.jpg';
import trainerAim2 from '../assets/images/trainer/trainer-aim-2.jpg';
import trainerAim3 from '../assets/images/trainer/trainer-aim-3.jpg';

export interface TrainerImage {
  id: string;
  src: string;
  alt: string;
}

export const TRAINER_IMAGES: TrainerImage[] = [
  {
    id: 'trainer-1',
    src: trainerAim1,
    alt: 'Instrutor Paulo Pithon em posição de mira com pistola',
  },
  {
    id: 'trainer-2',
    src: trainerStanding,
    alt: 'Instrutor Paulo Pithon em posição tática com arma',
  },
  {
    id: 'trainer-3',
    src: trainerAim2,
    alt: 'Instrutor Paulo Pithon apontando arma em estande de tiro',
  },
  {
    id: 'trainer-4',
    src: trainerAim3,
    alt: 'Instrutor Paulo Pithon em treinamento de tiro',
  },
];
