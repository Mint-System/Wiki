---
kind:
  - howto
lang: en
---

# Odoo Module Testing

The test of Odoo modules are unit test. The module functionality must be tested in isolation of external systems.

Often it is required to mock the request and reponse of external systems.

### Mocking

Here is an example of a test that mocks a `_uc_download_file` method.

```python
    def _mock_uc_download_file(self, uuid):
        image_file = get_module_resource("legal_advice_fastapi", "tests/odoo.png")
        with open(image_file, "rb") as image:
            return image.read()

    def test_post_attachment(self):
        interaction = self.test_interaction_question
        data = [InteractionAttachment(**{"filename": "odoo.png", "uuid": "238bdee0-1b93-4797-a016-fbee69dda570"})]
        with mock.patch.object(type(interaction), "_uc_download_file", new=self._mock_uc_download_file):
            response = post_attachment(self.env, self.authorisation, interaction.id, data)

        self.assertEqual(response.status_code, 204)
        self.assertEqual(len(interaction.text_attachment_ids), 1)
        self.assertEqual(interaction.text_attachment_ids[0].name, "odoo.png")
        self.assertEqual(
            interaction.text_attachment_ids[0].raw, self._mock_uc_download_file("238bdee0-1b93-4797-a016-fbee69dda570")
        )
```
