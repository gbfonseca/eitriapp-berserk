#/bin/bash
# eitri push-version
# eitri publish --environment 852ff350-8d65-49cc-815e-12483b37d425 --message "Publish on CI"

curl -Ls "https://get.maestro.mobile.dev" | bash
export PATH="$PATH":"$HOME/.maestro/bin"

wget https://cdn.83io.com.br/artifacts/calindrasa.apk

# Install the APK
adb install -f ./calindrasa.apk

export MAESTRO_CLI_NO_ANALYTICS=1

# Run Maestro mobile tests
maestro test test.yaml --debug-output ./logs