# AUTO GENERATED FILE - DO NOT EDIT

export multiselect

"""
    multiselect(;kwargs...)
    multiselect(children::Any;kwargs...)
    multiselect(children_maker::Function;kwargs...)


A MultiSelect component.

Keyword arguments:
- `children` (a list of or a singular dash component, string or number; optional)
- `id` (String; optional)
- `class_name` (String; optional)
- `components` (Dict with Strings as keys and values of type Bool | Real | String | Dict | Array; optional)
- `isSelectAll` (Bool; optional)
- `menuPlacement` (a value equal to: 'auto', 'top', 'bottom'; optional)
- `options` (required): . options has the following type: Array of lists containing elements 'label', 'value'.
Those elements have the following types:
  - `label` (String; required)
  - `value` (String | Real; required)s
- `value` (Array of String | Reals; optional)
"""
function multiselect(; kwargs...)
        available_props = Symbol[:children, :id, :class_name, :components, :isSelectAll, :menuPlacement, :options, :value]
        wild_props = Symbol[]
        return Component("multiselect", "MultiSelect", "multi_select", available_props, wild_props; kwargs...)
end

multiselect(children::Any; kwargs...) = multiselect(;kwargs..., children = children)
multiselect(children_maker::Function; kwargs...) = multiselect(children_maker(); kwargs...)

