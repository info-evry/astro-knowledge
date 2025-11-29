// Info Evry Knowledge Base
// Shared content across all Info Evry web properties

// NDI Event Information
import ndiEvent from './ndi/event.json';
import ndiInfoEvry from './ndi/info-evry.json';

// Association Information
import associationInfo from './association/info.json';

export const ndi = {
  event: ndiEvent,
  infoEvry: ndiInfoEvry
};

export const association = associationInfo;

// Helper functions
export function formatDate(dateString, options = {}) {
  const date = new Date(dateString);
  return date.toLocaleDateString('fr-FR', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    ...options
  });
}

export function formatTime(dateString) {
  const date = new Date(dateString);
  return date.toLocaleTimeString('fr-FR', {
    hour: '2-digit',
    minute: '2-digit'
  });
}

export function formatDateTime(dateString) {
  return `${formatDate(dateString)} à ${formatTime(dateString)}`;
}

// Default export
export default {
  ndi,
  association,
  formatDate,
  formatTime,
  formatDateTime
};
