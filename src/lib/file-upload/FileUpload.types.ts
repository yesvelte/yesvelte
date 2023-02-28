import type { ElProps } from '../el'

export const FILE_UPLOAD_SIZES = ['sm', 'md', 'lg'] as const
export type FileUploadSizes = (typeof FILE_UPLOAD_SIZES)[number]

export const FILE_UPLOAD_STATES = ['valid', 'invalid'] as const
export type FileUploadStates = (typeof FILE_UPLOAD_STATES)[number]

export interface FileUploadWrapperProps extends Partial<ElProps> {
	size?: FileUploadSizes
}

export interface FileUploadProps extends Partial<ElProps> {
	disabled?: boolean
	placeholder?: string
	size?: FileUploadSizes
	files?: FileList
	state?: FileUploadStates
	accept?: string[]
	multiple?: boolean
}
