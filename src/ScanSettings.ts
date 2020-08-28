export enum LogLevel {
  INFO = 2,
  ERROR = 4,
  SILENT = 5
}

export interface ScanSettings {

  /** How much text should be printed in the console */
  logLevel: LogLevel

  /** The folder where downloaded charts should be saved */
  downloadsFilepath: string

  /** Files larger than this number of megabytes will not be downloaded from Google Drive (anything too large will crash when unzipping) */
  maxDownloadSizeMB: number

  /** Scan all charts detected in sources, even if they have already been scanned before (may add duplicate lines to ScanErrors) */
  rescanAllVersions: boolean

  /** Instead of scanning all of `sources.json`, only scan the last X added sources */
  onlyScanLastXSources?: number

  /** The minimum number of charts that each source should have. If there are fewer than this, an error is added to ScanErrors */
  minimumChartCount: number

  /** If the number of errors in a source is greater than or equal to this, it is put in the "ManyErrors" folder instead of the "FewErrors" folder */
  seriousErrorThreshold: number
}

const defaultSettings: ScanSettings = {
  logLevel: LogLevel.INFO,
  downloadsFilepath: './ChartDownloads',
  maxDownloadSizeMB: 3000000000,
  rescanAllVersions: false,
  onlyScanLastXSources: undefined,
  minimumChartCount: 5,
  seriousErrorThreshold: 3
}

/**
 * @param options An object containing the desired scan settings that are different from the default values.
 * @returns A `ScanSettings` object containing the settings that should be used for this scan.
 */
export function getSettings(options: Partial<ScanSettings> = defaultSettings): ScanSettings {
  return Object.assign({}, defaultSettings, options)
}