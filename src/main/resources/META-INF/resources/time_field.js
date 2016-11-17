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
				}
			}
		);

		Liferay.namespace('DDM.Field').Time = TimeField;
	},
	'',
	{
		requires: ['liferay-ddm-form-renderer-field']
	}
);