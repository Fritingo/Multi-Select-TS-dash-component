import dash
from dash import dcc, html, Input, Output
from multi_select import MultiSelect  # Ensure this import points to the correct location of your MultiSelect component

# Initialize the Dash app
app = dash.Dash(__name__)

# Example options for the MultiSelect component
options = [
    {'label': 'Option 1', 'value': 1},
    {'label': 'Option 2', 'value': 2},
    {'label': 'Option 3', 'value': 3},
    {'label': 'Option 4', 'value': 4},
    {'label': 'Option 5', 'value': 5},
    {'label': 'Option 6', 'value': 6}
]

# Layout for the app
app.layout = html.Div([
    html.H3("MultiSelect Component Example"),
    
    # MultiSelect component usage
    MultiSelect(
        id='multi-select',
        options=options,  # The options you want to present in the dropdown
        value=[],  # Initially no options are selected
        isSelectAll=True,  # Enable the 'Select All' functionality
        menuPlacement="auto",  # Placement of the dropdown menu
    ),
    
    # Button to display selected items
    html.Button("Show Selected Items", id="show-selected-btn", n_clicks=0),
    
    # Div to display the selected items
    html.Div(id="selected-items-display")
])

# Callback to update the display when the button is clicked
@app.callback(
    Output("selected-items-display", "children"),
    Input("show-selected-btn", "n_clicks"),
    Input("multi-select", "value")  # Use the value from the MultiSelect component directly
)
def display_selected_items(n_clicks, selected_values):
    if n_clicks == 0:
        return ""
    if selected_values:
        # Display selected options
        selected_labels = [option['label'] for option in options if option['value'] in selected_values]
        return html.Div([
            html.H4("Selected Items:"),
            html.Ul([html.Li(label) for label in selected_labels])
        ])
    return html.Div("No items selected.")

# Run the Dash app
if __name__ == '__main__':
    app.run_server(debug=True)
