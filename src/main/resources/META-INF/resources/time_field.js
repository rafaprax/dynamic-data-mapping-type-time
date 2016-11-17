AUI.add(
	'liferay-ddm-form-field-time',
	function(A) {
		var TimeField = A.Component.create(
			{
				ATTRS: {
					type: {
						value: 'time'
					}
				},

				EXTENDS: Liferay.DDM.Renderer.Field,

				NAME: 'liferay-ddm-form-field-time',

				prototype: {

					render: function() {
						var instance = this;

						TimeField.superclass.render.apply(instance, arguments);

						instance._timePicker = new A.TimePicker(
							{
								trigger: instance.getInputSelector(),
								popover: {
									zIndex: 1
								}
							}
						);
					}

				}
			}
		);

		Liferay.namespace('DDM.Field').Time = TimeField;
	},
	'',
	{
		requires: ['aui-timepicker', 'liferay-ddm-form-renderer-field']
	}
);