import { useRoutes } from 'react-router-dom';

// project import
import MainRoutes from './MainRoutes';

// Rendring Routes

export default function ThemeRoutes() {
  return useRoutes([MainRoutes]);
}
