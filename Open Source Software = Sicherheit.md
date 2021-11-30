# Open Source Software = Sicherheit

Warum ist Open Source Software sicherer als Closed Source Software?

Immer wieder sind wir mit dem Argument konfrontiert, dass Open Source Software nicht sicher sein kann, weil es gratis ist. oft fällt auch das "there is no free lunch"-Idiom. Warum dieses Argument falsch ist, wollen wir hier erläutern.

Ersteinmal muss man wissen, dass Software Code nicht vergeleichbar mit handfesten Produkten ist. Software Code hat ein besonderes Merkmal - Es kann ohne erheblichen Aufwand vervielfältigt werden. Das ist beispielsweise mit einem Auto eher schwierig. Möchte man Software also verkaufen, geht das nur über Lizenzen. Man verkauft sozusagen das geistige Eigentum, aber nicht die Programmzeilen.

> Software Code hat eine Besonderheit - Er kann ohne Aufwand vervielfältigt werden.

Daraus stellt sich die Frage: Was hat Software Code für einen Wert, wenn man ihn ganz einfach vervielfältigen kann? Unsere Antwort darauf ist einfach. Der Wert eines Software Codes schlägt sich in der Anzahl der Systeme / Anwender nieder, die den Code verwenden und ausführen.

> Der Wert von Software Code liegt in der Anzahl der Ausführungen.

Demnach steigt der Werte von Code umso mehr Systeme / Anwender diesen ausführen. Und genau deshalb liegt der grösste Teil von Code auf Kollaborationsplattformen wie [GitHub](https://github.com/) oder [GitLab](https://gitlab.com/). Man findet dort den Code zu Millionen von Softwaresystemen, beispielsweise den [Code zum Linux-Betriebssystem](https://github.com/torvalds/linux), welches es [bis auf den Mars geschafft hat](https://www.theverge.com/2021/2/19/22291324/linux-perseverance-mars-curiosity-ingenuity).

Diese Plattformen werden von Sicherheitsforschern genutzt um Sicherheitslücken in Code zu finden. Es ist ein Ökosystem entstanden, in dem Entwickler dafür bezahlt 
werden Sicherheitslücken zu finden un zu schliessen (siehe beispielsweise [hackerone](https://www.hackerone.com/)). Den Code offen zu legen schafft also mehr Sicherheit.

> Transparenz schafft Sicherheit.

Das Gegenteil nennt man "secuirty through obscurity", also Sicherheit durch Verschleierung. Dieser Ansatz wird von Sicherheitsforschern [nicht mehr empfohlen](https://en.wikipedia.org/wiki/Security_through_obscurity#Criticism).

Zusammenfassend kann man diese Schlussfolgerungen machen:
* Der Wert von Software Code liegt in der Anzahl der Ausführungen.
* Die Anzahl der Ausführungen steigt, wenn der Code auf offenen Plattformen liegt.
* Es gibt Anreize den Code auf diesen Plattformen nach Sicherheitzlücken zu durchsuchen und diese zu schliessen.