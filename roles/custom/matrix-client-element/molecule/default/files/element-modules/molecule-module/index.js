// SPDX-FileCopyrightText: 2026 Yan Minagawa
//
// SPDX-License-Identifier: AGPL-3.0-or-later

// A minimal Element Web module. The scenario only checks that the role copies,
// mounts and lists it; no browser loads it.
export default class MoleculeModule {
    static moduleApiVersion = "^1.0.0";
    static marker = "molecule-element-module";

    async load() {}
}
