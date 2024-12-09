
module MultiSelect
using Dash

const resources_path = realpath(joinpath( @__DIR__, "..", "deps"))
const version = "1.0.0"

include("jl/multiselect.jl")

function __init__()
    DashBase.register_package(
        DashBase.ResourcePkg(
            "multi_select",
            resources_path,
            version = version,
            [
                DashBase.Resource(
    relative_package_path = "multi_select.js",
    external_url = nothing,
    dynamic = nothing,
    async = nothing,
    type = :js
),
DashBase.Resource(
    relative_package_path = "multi_select.js.map",
    external_url = nothing,
    dynamic = true,
    async = nothing,
    type = :js
)
            ]
        )

    )
end
end
