{ nixpkgs ? import ./dep/nixpkgs {} }:
with nixpkgs;

mkShell {
  buildInputs = [
    nodejs
    ghcid
  ];
}
