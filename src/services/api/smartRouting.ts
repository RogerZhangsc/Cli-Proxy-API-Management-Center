import { apiClient } from './client';

export interface SmartRoutingProbeCounts {
  success?: number;
  skipped?: number;
  error?: number;
}

export interface SmartRoutingProbeResult {
  authId: string;
  authIndex: string;
  provider: string;
  status: 'success' | 'skipped' | 'error' | string;
  error?: string;
}

export interface SmartRoutingProbeResponse {
  enabled: boolean;
  routingEnabled?: boolean;
  counts?: SmartRoutingProbeCounts;
  results?: SmartRoutingProbeResult[];
}

export const smartRoutingApi = {
  probe: () => apiClient.post<SmartRoutingProbeResponse>('/routing/smart/probe')
};
