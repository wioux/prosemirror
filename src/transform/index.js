export {Transform, TransformError} from "./transform"
export {Step, StepResult} from "./step"
export {canWrap, canLift, joinPoint, joinable, canSplit} from "./structure"
export {PosMap, MapResult, Remapping} from "./map"
export {AddMarkStep, RemoveMarkStep} from "./mark_step"
export {ReplaceStep, ReplaceWrapStep} from "./replace_step"
import "./replace"
import "./mark"

// !! This module defines a way to transform documents. Transforming
// happens in `Step`s, which are atomic, well-defined modifications to
// a document. [Applying](`Step.apply`) a step produces a new document
// and a [position map](#PosMap) that maps positions in the old
// document to position in the new document. Steps can be
// [inverted](#Step.invert) to create a step that undoes their effect,
// and chained together in a convenience object called a `Transform`.
//
// This module does not depend on the browser API being available
// (i.e. you can load it into any JavaScript environment).
//
// You can read more about transformations in [this
// guide](guide/transform.md).
