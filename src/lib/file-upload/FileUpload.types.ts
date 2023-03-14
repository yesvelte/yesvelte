import type { ElProps } from '../el'
import type { InputSizes, InputStates } from '../input'

export interface FileUploadWrapperProps extends Partial<ElProps> {
	size?: InputSizes
}

export interface FileUploadProps extends Partial<ElProps> {
	disabled?: boolean
	placeholder?: string
	size?: InputSizes
	name?: string
	files?: FileList
	state?: InputStates
	accept?: string
	multiple?: boolean
	type?: 'file'
}
