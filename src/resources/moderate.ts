// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Moderate extends APIResource {
  analyze(body: ModerateAnalyzeParams, options?: RequestOptions): APIPromise<ModerateAnalyzeResponse> {
    return this._client.post('/moderate', { body, ...options });
  }

  /**
   * (Deprecated use https://api.moderationapi.com/v1/moderate) Analyze audio content
   * with your configured moderation models and filters.
   *
   * @deprecated
   */
  analyzeAudio(
    body: ModerateAnalyzeAudioParams,
    options?: RequestOptions,
  ): APIPromise<ModerateAnalyzeAudioResponse> {
    return this._client.post('/moderate/audio', { body, ...options });
  }

  /**
   * (Deprecated use https://api.moderationapi.com/v1/moderate) Analyze image with
   * your Moderation API project
   *
   * @deprecated
   */
  analyzeImage(
    body: ModerateAnalyzeImageParams,
    options?: RequestOptions,
  ): APIPromise<ModerateAnalyzeImageResponse> {
    return this._client.post('/moderate/image', { body, ...options });
  }

  /**
   * (Deprecated use https://api.moderationapi.com/v1/moderate) Analyze an object
   * with multiple fields including text, images, video, audio. Use to moderate a
   * post, a profile, a form submission or anything that have multiple fields.
   *
   * @deprecated
   */
  analyzeObject(
    body: ModerateAnalyzeObjectParams,
    options?: RequestOptions,
  ): APIPromise<ModerateAnalyzeObjectResponse> {
    return this._client.post('/moderate/object', { body, ...options });
  }

  /**
   * (Deprecated use https://api.moderationapi.com/v1/moderate) Analyze text content
   * with your configured moderation models and filters.
   *
   * @deprecated
   */
  analyzeText(
    body: ModerateAnalyzeTextParams,
    options?: RequestOptions,
  ): APIPromise<ModerateAnalyzeTextResponse> {
    return this._client.post('/moderate/text', { body, ...options });
  }

  /**
   * (Deprecated use https://api.moderationapi.com/v1/moderate) Analyze video content
   * with your configured moderation models and filters.
   *
   * @deprecated
   */
  analyzeVideo(
    body: ModerateAnalyzeVideoParams,
    options?: RequestOptions,
  ): APIPromise<ModerateAnalyzeVideoResponse> {
    return this._client.post('/moderate/video', { body, ...options });
  }
}

export interface ModerateAnalyzeResponse {
  /**
   * The author of the content if your account has authors enabled. Requires you to
   * send authorId when submitting content.
   */
  author: ModerateAnalyzeResponse.Author | null;

  /**
   * Potentially modified content.
   */
  content: ModerateAnalyzeResponse.Content;

  /**
   * The evaluation of the content after running the channel policies.
   */
  evaluation: ModerateAnalyzeResponse.Evaluation;

  /**
   * Results of all insights enabled in the channel.
   */
  insights: Array<ModerateAnalyzeResponse.UnionMember0 | ModerateAnalyzeResponse.UnionMember1>;

  /**
   * Metadata about the moderation request
   */
  meta: ModerateAnalyzeResponse.Meta;

  /**
   * Results of all policies in the channel. Sorted by highest probability.
   */
  policies: Array<ModerateAnalyzeResponse.UnionMember0 | ModerateAnalyzeResponse.UnionMember1>;

  /**
   * The recommendation for the content based on the evaluation.
   */
  recommendation: ModerateAnalyzeResponse.Recommendation;

  /**
   * Policies that had errors
   */
  errors?: Array<ModerateAnalyzeResponse.Error>;
}

export namespace ModerateAnalyzeResponse {
  /**
   * The author of the content if your account has authors enabled. Requires you to
   * send authorId when submitting content.
   */
  export interface Author {
    /**
     * Author ID in Moderation API
     */
    id: string;

    /**
     * Block or suspension details, if applicable. Null if the author is enabled.
     */
    block: Author.Block | null;

    /**
     * Current author status
     */
    status: 'enabled' | 'suspended' | 'blocked';

    trust_level: Author.TrustLevel;

    /**
     * The author's ID from your system
     */
    external_id?: string | null;
  }

  export namespace Author {
    /**
     * Block or suspension details, if applicable. Null if the author is enabled.
     */
    export interface Block {
      /**
       * The moderators reason why the author was blocked or suspended.
       */
      reason?: string | null;

      /**
       * The timestamp until which they are blocked if the author is suspended.
       */
      until?: number | null;
    }

    export interface TrustLevel {
      /**
       * Author trust level (-1, 0, 1, 2, 3, or 4)
       */
      level: number;

      /**
       * True if the trust level was set manually by a moderator
       */
      manual: boolean;
    }
  }

  /**
   * Potentially modified content.
   */
  export interface Content {
    /**
     * The unique identifier for the content. Either the contentId provided by you or
     * an autogenerated ID.
     */
    id: string;

    /**
     * Whether any values have been masked.
     */
    masked: boolean;

    /**
     * The modified content, if any.
     */
    modified:
      | string
      | {
          [key: string]:
            | Content.UnionMember0
            | Content.UnionMember1
            | Content.UnionMember2
            | Content.UnionMember3;
        }
      | null;
  }

  export namespace Content {
    /**
     * Text
     */
    export interface UnionMember0 {
      /**
       * The content text
       */
      text: string;

      type: 'text';
    }

    /**
     * Image
     */
    export interface UnionMember1 {
      type: 'image';

      /**
       * A public URL of the image content
       */
      url: string;
    }

    /**
     * Video
     */
    export interface UnionMember2 {
      type: 'video';

      /**
       * A public URL of the video content
       */
      url: string;
    }

    /**
     * Audio
     */
    export interface UnionMember3 {
      type: 'audio';

      /**
       * The URL of the audio content
       */
      url: string;
    }
  }

  /**
   * The evaluation of the content after running the channel policies.
   */
  export interface Evaluation {
    /**
     * The probability that the content should be flagged.
     */
    flag_probability: number;

    /**
     * Whether the content was flagged by any policy.
     */
    flagged: boolean;

    /**
     * The severity score of the content. A higher score indicates more severe content.
     */
    severity_score: number;

    /**
     * Whether the content was flagged for Unicode spoofing.
     */
    unicode_spoofed?: boolean;
  }

  /**
   * Sentiment insight
   */
  export interface UnionMember0 {
    id: 'sentiment';

    probability: number;

    type: 'insight';

    value: 'positive' | 'neutral' | 'negative' | null;
  }

  /**
   * Language insight
   */
  export interface UnionMember1 {
    id: 'language';

    probability: number;

    type: 'insight';

    value: string | null;
  }

  /**
   * Metadata about the moderation request
   */
  export interface Meta {
    /**
     * The unique key of the channel where the content was handled. Either the channel
     * provided by you or automatically routed.
     */
    channel_key: string;

    status: 'success' | 'partial_success';

    timestamp: number;

    usage: number;

    processing_time?: string;
  }

  /**
   * Classifier policy.
   */
  export interface UnionMember0 {
    /**
     * The unique identifier for the classifier output.
     */
    id: string;

    flagged: boolean;

    probability: number;

    type: 'classifier';

    /**
     * The keys of the flagged fields if submitting an object.
     */
    flagged_fields?: Array<string>;

    labels?: Array<UnionMember0.Label>;
  }

  export namespace UnionMember0 {
    export interface Label {
      id: string;

      flagged: boolean;

      probability: number;
    }
  }

  /**
   * Entity matcher policy.
   */
  export interface UnionMember1 {
    id: string;

    flagged: boolean;

    matches: Array<UnionMember1.Match>;

    probability: number;

    type: 'entity_matcher';

    flagged_fields?: Array<string>;
  }

  export namespace UnionMember1 {
    export interface Match {
      match: string;

      probability: number;

      span: Array<unknown>;
    }
  }

  /**
   * The recommendation for the content based on the evaluation.
   */
  export interface Recommendation {
    /**
     * The action to take based on the recommendation
     */
    action: 'review' | 'allow' | 'reject';

    /**
     * The reason code for the recommendation. Can be used to display a reason to the
     * user.
     */
    reason_codes: Array<'severity_reject' | 'severity_review' | 'author_block' | 'dry_run'>;
  }

  export interface Error {
    id: string;

    message: string;
  }
}

/**
 * Audio moderation analysis results
 */
export interface ModerateAnalyzeAudioResponse {
  /**
   * The author of the content if your account has authors enabled. Requires you to
   * send authorId when submitting content.
   */
  author: ModerateAnalyzeAudioResponse.Author | null;

  /**
   * Whether the content was flagged by any models
   */
  flagged: boolean;

  /**
   * Information about the request
   */
  request: ModerateAnalyzeAudioResponse.Request;

  /**
   * Success if the request was successful
   */
  status: string;

  /**
   * The ID of the content. Only returned if the content was stored.
   */
  contentId?: string;

  /**
   * Error message if the request failed
   */
  error?: unknown;
}

export namespace ModerateAnalyzeAudioResponse {
  /**
   * The author of the content if your account has authors enabled. Requires you to
   * send authorId when submitting content.
   */
  export interface Author {
    /**
     * Author ID in Moderation API
     */
    id: string;

    /**
     * Block or suspension details, if applicable. Null if the author is enabled.
     */
    block: Author.Block | null;

    /**
     * Current author status
     */
    status: 'enabled' | 'suspended' | 'blocked';

    trust_level: Author.TrustLevel;

    /**
     * The author's ID from your system
     */
    external_id?: string | null;
  }

  export namespace Author {
    /**
     * Block or suspension details, if applicable. Null if the author is enabled.
     */
    export interface Block {
      /**
       * The moderators reason why the author was blocked or suspended.
       */
      reason?: string | null;

      /**
       * The timestamp until which they are blocked if the author is suspended.
       */
      until?: number | null;
    }

    export interface TrustLevel {
      /**
       * Author trust level (-1, 0, 1, 2, 3, or 4)
       */
      level: number;

      /**
       * True if the trust level was set manually by a moderator
       */
      manual: boolean;
    }
  }

  /**
   * Information about the request
   */
  export interface Request {
    /**
     * The quota usage of the request
     */
    quota_usage: number;

    /**
     * The timestamp of the request
     */
    timestamp: number;
  }
}

export interface ModerateAnalyzeImageResponse {
  /**
   * The author of the content if your account has authors enabled. Requires you to
   * send authorId when submitting content.
   */
  author: ModerateAnalyzeImageResponse.Author | null;

  /**
   * Whether the content was flagged by any models
   */
  flagged: boolean;

  /**
   * The scores of each label
   */
  labels: Array<ModerateAnalyzeImageResponse.Label>;

  /**
   * Information about the request
   */
  request: ModerateAnalyzeImageResponse.Request;

  /**
   * Success if the request was successful
   */
  status: string;

  /**
   * The ID of the content. Only returned if the content was stored.
   */
  contentId?: string;

  /**
   * Error message if the request failed
   */
  error?: unknown;

  /**
   * The texts found in the image, if the image text model is enabled
   */
  texts?: Array<string>;
}

export namespace ModerateAnalyzeImageResponse {
  /**
   * The author of the content if your account has authors enabled. Requires you to
   * send authorId when submitting content.
   */
  export interface Author {
    /**
     * Author ID in Moderation API
     */
    id: string;

    /**
     * Block or suspension details, if applicable. Null if the author is enabled.
     */
    block: Author.Block | null;

    /**
     * Current author status
     */
    status: 'enabled' | 'suspended' | 'blocked';

    trust_level: Author.TrustLevel;

    /**
     * The author's ID from your system
     */
    external_id?: string | null;
  }

  export namespace Author {
    /**
     * Block or suspension details, if applicable. Null if the author is enabled.
     */
    export interface Block {
      /**
       * The moderators reason why the author was blocked or suspended.
       */
      reason?: string | null;

      /**
       * The timestamp until which they are blocked if the author is suspended.
       */
      until?: number | null;
    }

    export interface TrustLevel {
      /**
       * Author trust level (-1, 0, 1, 2, 3, or 4)
       */
      level: number;

      /**
       * True if the trust level was set manually by a moderator
       */
      manual: boolean;
    }
  }

  export interface Label {
    /**
     * The label of the model
     */
    label:
      | 'nudity'
      | 'suggestive'
      | 'gore'
      | 'hate'
      | 'violence'
      | 'weapon'
      | 'smoking'
      | 'drugs'
      | 'alcohol'
      | 'text'
      | 'toxic';

    /**
     * The confidence of the model
     */
    score: number;
  }

  /**
   * Information about the request
   */
  export interface Request {
    /**
     * The quota usage of the request
     */
    quota_usage: number;

    /**
     * The timestamp of the request
     */
    timestamp: number;
  }
}

export interface ModerateAnalyzeObjectResponse {
  /**
   * The author of the content if your account has authors enabled. Requires you to
   * send authorId when submitting content.
   */
  author: ModerateAnalyzeObjectResponse.Author | null;

  /**
   * Whether any entity matchers found data for the content
   */
  data_found: boolean;

  /**
   * The entities found in the content
   */
  entities: Array<ModerateAnalyzeObjectResponse.Entity>;

  /**
   * The fields in the object and their flags
   */
  fields: Array<ModerateAnalyzeObjectResponse.Field>;

  /**
   * Whether the content was flagged by any models
   */
  flagged: boolean;

  /**
   * The scores of each label
   */
  labels: Array<ModerateAnalyzeObjectResponse.Label>;

  /**
   * Information about the request
   */
  request: ModerateAnalyzeObjectResponse.Request;

  /**
   * Success if the request was successful
   */
  status: string;

  /**
   * Whether the content is using look-alike characters. Often used by spammers.
   */
  unicode_spoofing: boolean;

  /**
   * The ID of the content. Only returned if the content was stored.
   */
  contentId?: string;

  /**
   * Error message if the request failed
   */
  error?: unknown;

  /**
   * The wordlist entity matcher outputs if enabled in your project. Read more at
   * https://docs.moderationapi.com/models/word
   */
  wordlists?: Array<ModerateAnalyzeObjectResponse.Wordlist>;

  [k: string]: unknown;
}

export namespace ModerateAnalyzeObjectResponse {
  /**
   * The author of the content if your account has authors enabled. Requires you to
   * send authorId when submitting content.
   */
  export interface Author {
    /**
     * Author ID in Moderation API
     */
    id: string;

    /**
     * Block or suspension details, if applicable. Null if the author is enabled.
     */
    block: Author.Block | null;

    /**
     * Current author status
     */
    status: 'enabled' | 'suspended' | 'blocked';

    trust_level: Author.TrustLevel;

    /**
     * The author's ID from your system
     */
    external_id?: string | null;
  }

  export namespace Author {
    /**
     * Block or suspension details, if applicable. Null if the author is enabled.
     */
    export interface Block {
      /**
       * The moderators reason why the author was blocked or suspended.
       */
      reason?: string | null;

      /**
       * The timestamp until which they are blocked if the author is suspended.
       */
      until?: number | null;
    }

    export interface TrustLevel {
      /**
       * Author trust level (-1, 0, 1, 2, 3, or 4)
       */
      level: number;

      /**
       * True if the trust level was set manually by a moderator
       */
      manual: boolean;
    }
  }

  export interface Entity {
    /**
     * The matches of the entity
     */
    matches: Array<string>;

    /**
     * The model that found the entity
     */
    model: string;

    /**
     * The similarity score of the matches
     */
    score?: number;
  }

  export interface Field {
    /**
     * Whether the field was flagged
     */
    flagged: boolean;

    /**
     * The models that flagged the field
     */
    flagged_by: Array<string>;

    /**
     * The key of the field
     */
    key: string;
  }

  export interface Label {
    /**
     * The label of the model
     */
    label: string;

    /**
     * The model that found the label
     */
    model: string;

    /**
     * The confidence of the model
     */
    score: number;
  }

  /**
   * Information about the request
   */
  export interface Request {
    /**
     * The quota usage of the request
     */
    quota_usage: number;

    /**
     * The timestamp of the request
     */
    timestamp: number;
  }

  export interface Wordlist {
    /**
     * The ID of the wordlist
     */
    id: string;

    /**
     * Whether the wordlists flagged the content.
     */
    flagged: boolean;

    /**
     * The flagging mode.
     */
    mode: 'BLOCK_LIST' | 'REQUIRE_LIST' | 'PASS_LIST';

    /**
     * The name of the wordlist
     */
    name: string;

    /**
     * The score of the wordlist
     */
    score: number;

    /**
     * The components of the matcher.
     */
    components?: unknown;

    /**
     * Indicates an error with the matcher.
     */
    error?: string;

    /**
     * Whether a match was found or not.
     */
    found?: boolean;

    /**
     * The matches of the entity matcher.
     */
    matches?: Array<string>;

    /**
     * Indicates a warning from the model, e.g. if the text is too short or long and
     * the model might not be accurate.
     */
    warning?: string;
  }
}

/**
 * Moderation analysis results including model outputs and detected patterns
 */
export interface ModerateAnalyzeTextResponse {
  /**
   * The author of the content if your account has authors enabled. Requires you to
   * send authorId when submitting content.
   */
  author: ModerateAnalyzeTextResponse.Author | null;

  /**
   * The content after moderation. With all mask replacements applied and look-alike
   * characters replaced with the original characters.
   */
  content: string;

  /**
   * Whether the content was moderated or not. Same as `content` !== `original`
   */
  content_moderated: boolean;

  /**
   * Whether any entity matchers found data for the content
   */
  data_found: boolean;

  /**
   * Whether the content was flagged by any models
   */
  flagged: boolean;

  /**
   * The original content
   */
  original: string;

  /**
   * Information about the request
   */
  request: ModerateAnalyzeTextResponse.Request;

  /**
   * Success if the request was successful
   */
  status: string;

  /**
   * Whether the content is using look-alike characters. Often used by spammers.
   */
  unicode_spoofing: boolean;

  /**
   * The address entity matcher output if enabled in your project. Read more at
   * https://docs.moderationapi.com/models/address
   */
  address?: ModerateAnalyzeTextResponse.Address;

  /**
   * The ID of the content. Only returned if the content was stored.
   */
  contentId?: string;

  /**
   * The email entity matcher output if enabled in your project. Read more at
   * https://docs.moderationapi.com/models/email
   */
  email?: ModerateAnalyzeTextResponse.Email;

  /**
   * Error message if the request failed
   */
  error?: unknown;

  /**
   * The name entity matcher output if enabled in your project. Read more at
   * https://docs.moderationapi.com/models/name
   */
  name?: ModerateAnalyzeTextResponse.Name;

  /**
   * The NSFW model output if enabled in your project. Read more at
   * https://docs.moderationapi.com/models/nsfw
   */
  nsfw?: ModerateAnalyzeTextResponse.Nsfw;

  /**
   * The phone entity matcher output if enabled in your project. Read more at
   * https://docs.moderationapi.com/models/phone
   */
  phone?: ModerateAnalyzeTextResponse.Phone;

  /**
   * The profanity entity matcher output if enabled in your project. Read more at
   * https://docs.moderationapi.com/models/profanity
   */
  profanity?: ModerateAnalyzeTextResponse.Profanity;

  /**
   * The propriety model output if enabled in your project. Read more at
   * https://docs.moderationapi.com/models/propriety
   */
  propriety?: ModerateAnalyzeTextResponse.Propriety;

  /**
   * The spam model output if enabled in your project. Read more at
   * https://docs.moderationapi.com/models/spam
   */
  quality?: ModerateAnalyzeTextResponse.Quality;

  /**
   * The sensitive numbers entity matcher output if enabled in your project. Read
   * more at https://docs.moderationapi.com/models/sensitive
   */
  sensitive?: ModerateAnalyzeTextResponse.Sensitive;

  /**
   * The sentiment model output if enabled in your project. Read more at
   * https://docs.moderationapi.com/models/sentiment
   */
  sentiment?: ModerateAnalyzeTextResponse.Sentiment;

  /**
   * The toxicity model output if enabled in your project. Read more at
   * https://docs.moderationapi.com/models/toxicity
   */
  toxicity?: ModerateAnalyzeTextResponse.Toxicity;

  /**
   * The url entity matcher output if enabled in your project. Read more at
   * https://docs.moderationapi.com/models/url
   */
  url?: ModerateAnalyzeTextResponse.URL;

  /**
   * The username entity matcher output if enabled in your project. Read more at
   * https://docs.moderationapi.com/models/username
   */
  username?: ModerateAnalyzeTextResponse.Username;

  /**
   * The wordlist entity matcher output if enabled in your project. Read more at
   * https://docs.moderationapi.com/models/word
   */
  wordlist?: ModerateAnalyzeTextResponse.Wordlist;

  /**
   * The wordlist entity matcher outputs if enabled in your project. Read more at
   * https://docs.moderationapi.com/models/word
   */
  wordlists?: Array<ModerateAnalyzeTextResponse.Wordlist>;

  [k: string]: unknown;
}

export namespace ModerateAnalyzeTextResponse {
  /**
   * The author of the content if your account has authors enabled. Requires you to
   * send authorId when submitting content.
   */
  export interface Author {
    /**
     * Author ID in Moderation API
     */
    id: string;

    /**
     * Block or suspension details, if applicable. Null if the author is enabled.
     */
    block: Author.Block | null;

    /**
     * Current author status
     */
    status: 'enabled' | 'suspended' | 'blocked';

    trust_level: Author.TrustLevel;

    /**
     * The author's ID from your system
     */
    external_id?: string | null;
  }

  export namespace Author {
    /**
     * Block or suspension details, if applicable. Null if the author is enabled.
     */
    export interface Block {
      /**
       * The moderators reason why the author was blocked or suspended.
       */
      reason?: string | null;

      /**
       * The timestamp until which they are blocked if the author is suspended.
       */
      until?: number | null;
    }

    export interface TrustLevel {
      /**
       * Author trust level (-1, 0, 1, 2, 3, or 4)
       */
      level: number;

      /**
       * True if the trust level was set manually by a moderator
       */
      manual: boolean;
    }
  }

  /**
   * Information about the request
   */
  export interface Request {
    /**
     * The quota usage of the request
     */
    quota_usage: number;

    /**
     * The timestamp of the request
     */
    timestamp: number;
  }

  /**
   * The address entity matcher output if enabled in your project. Read more at
   * https://docs.moderationapi.com/models/address
   */
  export interface Address {
    /**
     * The components of the matcher.
     */
    components?: unknown;

    /**
     * Indicates an error with the matcher.
     */
    error?: string;

    /**
     * Whether a match was found or not.
     */
    found?: boolean;

    /**
     * The matches of the entity matcher.
     */
    matches?: Array<string>;

    /**
     * The detection mode.
     */
    mode?: 'NORMAL' | 'SUSPICIOUS' | 'PARANOID';

    /**
     * Indicates a warning from the model, e.g. if the text is too short or long and
     * the model might not be accurate.
     */
    warning?: string;
  }

  /**
   * The email entity matcher output if enabled in your project. Read more at
   * https://docs.moderationapi.com/models/email
   */
  export interface Email {
    /**
     * The components of the matcher.
     */
    components?: unknown;

    /**
     * Indicates an error with the matcher.
     */
    error?: string;

    /**
     * Whether a match was found or not.
     */
    found?: boolean;

    /**
     * The matches of the entity matcher.
     */
    matches?: Array<string>;

    /**
     * The detection mode.
     */
    mode?: 'NORMAL' | 'SUSPICIOUS' | 'PARANOID';

    /**
     * Indicates a warning from the model, e.g. if the text is too short or long and
     * the model might not be accurate.
     */
    warning?: string;
  }

  /**
   * The name entity matcher output if enabled in your project. Read more at
   * https://docs.moderationapi.com/models/name
   */
  export interface Name {
    /**
     * The components of the matcher.
     */
    components?: unknown;

    /**
     * Indicates an error with the matcher.
     */
    error?: string;

    /**
     * Whether a match was found or not.
     */
    found?: boolean;

    /**
     * The matches of the entity matcher.
     */
    matches?: Array<string>;

    /**
     * The detection mode.
     */
    mode?: 'NORMAL' | 'SUSPICIOUS' | 'PARANOID';

    /**
     * Indicates a warning from the model, e.g. if the text is too short or long and
     * the model might not be accurate.
     */
    warning?: string;
  }

  /**
   * The NSFW model output if enabled in your project. Read more at
   * https://docs.moderationapi.com/models/nsfw
   */
  export interface Nsfw {
    /**
     * Indicates an error with the model
     */
    error?: string;

    /**
     * The label of the model
     */
    label?: string;

    /**
     * The confidence of all labels
     */
    label_scores?: Nsfw.LabelScores;

    /**
     * The confidence of the model
     */
    score?: number;

    /**
     * Indicates a warning from the model, e.g. if the text is too short or long and
     * the model might not be accurate
     */
    warning?: string;
  }

  export namespace Nsfw {
    /**
     * The confidence of all labels
     */
    export interface LabelScores {
      NEUTRAL?: number;

      /**
       * Mentions religion, politics, race, etc., but is neutral or positive.
       */
      SENSITIVE?: number;

      /**
       * Sexual, hateful, profane, and inappropriate content.
       */
      UNSAFE?: number;
    }
  }

  /**
   * The phone entity matcher output if enabled in your project. Read more at
   * https://docs.moderationapi.com/models/phone
   */
  export interface Phone {
    /**
     * The components of the matcher.
     */
    components?: unknown;

    /**
     * Indicates an error with the matcher.
     */
    error?: string;

    /**
     * Whether a match was found or not.
     */
    found?: boolean;

    /**
     * The matches of the entity matcher.
     */
    matches?: Array<string>;

    /**
     * The detection mode.
     */
    mode?: 'NORMAL' | 'SUSPICIOUS' | 'PARANOID';

    /**
     * Indicates a warning from the model, e.g. if the text is too short or long and
     * the model might not be accurate.
     */
    warning?: string;
  }

  /**
   * The profanity entity matcher output if enabled in your project. Read more at
   * https://docs.moderationapi.com/models/profanity
   */
  export interface Profanity {
    /**
     * The components of the matcher.
     */
    components?: unknown;

    /**
     * Indicates an error with the matcher.
     */
    error?: string;

    /**
     * Whether a match was found or not.
     */
    found?: boolean;

    /**
     * The matches of the entity matcher.
     */
    matches?: Array<string>;

    /**
     * The detection mode.
     */
    mode?: 'NORMAL' | 'SUSPICIOUS' | 'PARANOID';

    /**
     * Indicates a warning from the model, e.g. if the text is too short or long and
     * the model might not be accurate.
     */
    warning?: string;
  }

  /**
   * The propriety model output if enabled in your project. Read more at
   * https://docs.moderationapi.com/models/propriety
   */
  export interface Propriety {
    /**
     * Indicates an error with the model
     */
    error?: string;

    /**
     * The label of the model
     */
    label?: string;

    /**
     * The confidence of all labels
     */
    label_scores?: Propriety.LabelScores;

    /**
     * The confidence of the model
     */
    score?: number;

    /**
     * Indicates a warning from the model, e.g. if the text is too short or long and
     * the model might not be accurate
     */
    warning?: string;
  }

  export namespace Propriety {
    /**
     * The confidence of all labels
     */
    export interface LabelScores {
      /**
       * Pickup lines, compliments on appearance, etc.
       */
      FLIRTATION?: number;

      NEUTRAL?: number;

      /**
       * References to sexual acts, body parts, etc.
       */
      SEXUALLY_EXPLICIT?: number;
    }
  }

  /**
   * The spam model output if enabled in your project. Read more at
   * https://docs.moderationapi.com/models/spam
   */
  export interface Quality {
    /**
     * Indicates an error with the model
     */
    error?: string;

    /**
     * The label of the model
     */
    label?: string;

    /**
     * The confidence of all labels
     */
    label_scores?: Quality.LabelScores;

    /**
     * The confidence of the model
     */
    score?: number;

    /**
     * Indicates a warning from the model, e.g. if the text is too short or long and
     * the model might not be accurate
     */
    warning?: string;
  }

  export namespace Quality {
    /**
     * The confidence of all labels
     */
    export interface LabelScores {
      /**
       * Difficult to understand, nonsensical.
       */
      INCOHERENT?: number;

      NEUTRAL?: number;

      /**
       * Irrelevant and unsolicited commercial content.
       */
      SPAM?: number;

      /**
       * Trivial or short content.
       */
      UNSUBSTANTIAL?: number;
    }
  }

  /**
   * The sensitive numbers entity matcher output if enabled in your project. Read
   * more at https://docs.moderationapi.com/models/sensitive
   */
  export interface Sensitive {
    /**
     * The components of the matcher.
     */
    components?: unknown;

    /**
     * Indicates an error with the matcher.
     */
    error?: string;

    /**
     * Whether a match was found or not.
     */
    found?: boolean;

    /**
     * The matches of the entity matcher.
     */
    matches?: Array<string>;

    /**
     * The detection mode.
     */
    mode?: 'NORMAL' | 'SUSPICIOUS' | 'PARANOID';

    /**
     * Indicates a warning from the model, e.g. if the text is too short or long and
     * the model might not be accurate.
     */
    warning?: string;
  }

  /**
   * The sentiment model output if enabled in your project. Read more at
   * https://docs.moderationapi.com/models/sentiment
   */
  export interface Sentiment {
    /**
     * Indicates an error with the model
     */
    error?: string;

    /**
     * The label of the model
     */
    label?: string;

    /**
     * The confidence of all labels
     */
    label_scores?: Sentiment.LabelScores;

    /**
     * The confidence of the model
     */
    score?: number;

    /**
     * Indicates a warning from the model, e.g. if the text is too short or long and
     * the model might not be accurate
     */
    warning?: string;
  }

  export namespace Sentiment {
    /**
     * The confidence of all labels
     */
    export interface LabelScores {
      /**
       * Negative sentiment.
       */
      NEGATIVE?: number;

      NEUTRAL?: number;

      /**
       * Positive sentiment.
       */
      POSITIVE?: number;
    }
  }

  /**
   * The toxicity model output if enabled in your project. Read more at
   * https://docs.moderationapi.com/models/toxicity
   */
  export interface Toxicity {
    /**
     * Indicates an error with the model
     */
    error?: string;

    /**
     * The label of the model
     */
    label?: string;

    /**
     * The confidence of all labels
     */
    label_scores?: Toxicity.LabelScores;

    /**
     * The confidence of the model
     */
    score?: number;

    /**
     * Indicates a warning from the model, e.g. if the text is too short or long and
     * the model might not be accurate
     */
    warning?: string;
  }

  export namespace Toxicity {
    /**
     * The confidence of all labels
     */
    export interface LabelScores {
      /**
       * Discrimination of race, religion, gender, etc.
       */
      DISCRIMINATION?: number;

      /**
       * Negative comments about looks or personality etc.
       */
      INSULT?: number;

      NEUTRAL?: number;

      /**
       * Swearing, curse words, and other obscene language.
       */
      PROFANITY?: number;

      /**
       * Very hateful and aggressive content.
       */
      SEVERE_TOXICITY?: number;

      /**
       * Content containing intention to harm or violence.
       */
      THREAT?: number;

      /**
       * Rude or disrespectful content.
       */
      TOXICITY?: number;
    }
  }

  /**
   * The url entity matcher output if enabled in your project. Read more at
   * https://docs.moderationapi.com/models/url
   */
  export interface URL {
    /**
     * The components of the matcher.
     */
    components?: unknown;

    /**
     * Indicates an error with the matcher.
     */
    error?: string;

    /**
     * Whether a match was found or not.
     */
    found?: boolean;

    /**
     * The matches of the entity matcher.
     */
    matches?: Array<string>;

    /**
     * The detection mode.
     */
    mode?: 'NORMAL' | 'SUSPICIOUS' | 'PARANOID';

    /**
     * Indicates a warning from the model, e.g. if the text is too short or long and
     * the model might not be accurate.
     */
    warning?: string;
  }

  /**
   * The username entity matcher output if enabled in your project. Read more at
   * https://docs.moderationapi.com/models/username
   */
  export interface Username {
    /**
     * The components of the matcher.
     */
    components?: unknown;

    /**
     * Indicates an error with the matcher.
     */
    error?: string;

    /**
     * Whether a match was found or not.
     */
    found?: boolean;

    /**
     * The matches of the entity matcher.
     */
    matches?: Array<string>;

    /**
     * The detection mode.
     */
    mode?: 'NORMAL' | 'SUSPICIOUS' | 'PARANOID';

    /**
     * Indicates a warning from the model, e.g. if the text is too short or long and
     * the model might not be accurate.
     */
    warning?: string;
  }

  /**
   * The wordlist entity matcher output if enabled in your project. Read more at
   * https://docs.moderationapi.com/models/word
   */
  export interface Wordlist {
    /**
     * The components of the matcher.
     */
    components?: unknown;

    /**
     * Indicates an error with the matcher.
     */
    error?: string;

    /**
     * Whether a match was found or not.
     */
    found?: boolean;

    /**
     * The matches of the entity matcher.
     */
    matches?: Array<string>;

    /**
     * The detection mode.
     */
    mode?: 'NORMAL' | 'SUSPICIOUS' | 'PARANOID';

    /**
     * Indicates a warning from the model, e.g. if the text is too short or long and
     * the model might not be accurate.
     */
    warning?: string;
  }

  export interface Wordlist {
    /**
     * The ID of the wordlist
     */
    id: string;

    /**
     * Whether the wordlists flagged the content.
     */
    flagged: boolean;

    /**
     * The flagging mode.
     */
    mode: 'BLOCK_LIST' | 'REQUIRE_LIST' | 'PASS_LIST';

    /**
     * The name of the wordlist
     */
    name: string;

    /**
     * The score of the wordlist
     */
    score: number;

    /**
     * The components of the matcher.
     */
    components?: unknown;

    /**
     * Indicates an error with the matcher.
     */
    error?: string;

    /**
     * Whether a match was found or not.
     */
    found?: boolean;

    /**
     * The matches of the entity matcher.
     */
    matches?: Array<string>;

    /**
     * Indicates a warning from the model, e.g. if the text is too short or long and
     * the model might not be accurate.
     */
    warning?: string;
  }
}

export interface ModerateAnalyzeVideoResponse {
  /**
   * The author of the content if your account has authors enabled. Requires you to
   * send authorId when submitting content.
   */
  author: ModerateAnalyzeVideoResponse.Author | null;

  /**
   * Whether the content was flagged by any models
   */
  flagged: boolean;

  /**
   * Information about the request
   */
  request: ModerateAnalyzeVideoResponse.Request;

  /**
   * Success if the request was successful
   */
  status: string;

  /**
   * The ID of the content. Only returned if the content was stored.
   */
  contentId?: string;

  /**
   * Error message if the request failed
   */
  error?: unknown;

  [k: string]: unknown;
}

export namespace ModerateAnalyzeVideoResponse {
  /**
   * The author of the content if your account has authors enabled. Requires you to
   * send authorId when submitting content.
   */
  export interface Author {
    /**
     * Author ID in Moderation API
     */
    id: string;

    /**
     * Block or suspension details, if applicable. Null if the author is enabled.
     */
    block: Author.Block | null;

    /**
     * Current author status
     */
    status: 'enabled' | 'suspended' | 'blocked';

    trust_level: Author.TrustLevel;

    /**
     * The author's ID from your system
     */
    external_id?: string | null;
  }

  export namespace Author {
    /**
     * Block or suspension details, if applicable. Null if the author is enabled.
     */
    export interface Block {
      /**
       * The moderators reason why the author was blocked or suspended.
       */
      reason?: string | null;

      /**
       * The timestamp until which they are blocked if the author is suspended.
       */
      until?: number | null;
    }

    export interface TrustLevel {
      /**
       * Author trust level (-1, 0, 1, 2, 3, or 4)
       */
      level: number;

      /**
       * True if the trust level was set manually by a moderator
       */
      manual: boolean;
    }
  }

  /**
   * Information about the request
   */
  export interface Request {
    /**
     * The quota usage of the request
     */
    quota_usage: number;

    /**
     * The timestamp of the request
     */
    timestamp: number;
  }
}

export interface ModerateAnalyzeParams {
  /**
   * The content sent for moderation
   */
  content:
    | ModerateAnalyzeParams.UnionMember0
    | ModerateAnalyzeParams.UnionMember1
    | ModerateAnalyzeParams.UnionMember2
    | ModerateAnalyzeParams.UnionMember3
    | ModerateAnalyzeParams.UnionMember4;

  /**
   * The author of the content.
   */
  authorId?: string;

  /**
   * Provide a channel ID or key. Will use the project's default channel if not
   * provided.
   */
  channel?: string;

  /**
   * The unique ID of the content in your database.
   */
  contentId?: string;

  /**
   * For example the ID of a chat room or a post
   */
  conversationId?: string;

  /**
   * Do not store the content. The content won't enter the review queue
   */
  doNotStore?: boolean;

  /**
   * Any metadata you want to store with the content
   */
  metadata?: { [key: string]: unknown };

  /**
   * The meta type of content being moderated
   */
  metaType?: 'profile' | 'message' | 'post' | 'comment' | 'event' | 'product' | 'review' | 'other';
}

export namespace ModerateAnalyzeParams {
  /**
   * Text
   */
  export interface UnionMember0 {
    /**
     * The content text
     */
    text: string;

    type: 'text';
  }

  /**
   * Image
   */
  export interface UnionMember1 {
    type: 'image';

    /**
     * A public URL of the image content
     */
    url: string;
  }

  /**
   * Video
   */
  export interface UnionMember2 {
    type: 'video';

    /**
     * A public URL of the video content
     */
    url: string;
  }

  /**
   * Audio
   */
  export interface UnionMember3 {
    type: 'audio';

    /**
     * The URL of the audio content
     */
    url: string;
  }

  /**
   * Object
   */
  export interface UnionMember4 {
    /**
     * Values in the object. Can be mixed content types.
     */
    data: {
      [key: string]:
        | UnionMember4.UnionMember0
        | UnionMember4.UnionMember1
        | UnionMember4.UnionMember2
        | UnionMember4.UnionMember3;
    };

    type: 'object';
  }

  export namespace UnionMember4 {
    /**
     * Text
     */
    export interface UnionMember0 {
      /**
       * The content text
       */
      text: string;

      type: 'text';
    }

    /**
     * Image
     */
    export interface UnionMember1 {
      type: 'image';

      /**
       * A public URL of the image content
       */
      url: string;
    }

    /**
     * Video
     */
    export interface UnionMember2 {
      type: 'video';

      /**
       * A public URL of the video content
       */
      url: string;
    }

    /**
     * Audio
     */
    export interface UnionMember3 {
      type: 'audio';

      /**
       * The URL of the audio content
       */
      url: string;
    }
  }
}

export interface ModerateAnalyzeAudioParams {
  /**
   * The URL of the audio you want to analyze.
   */
  url: string;

  /**
   * The author of the content.
   */
  authorId?: string;

  /**
   * The key of the channel.
   */
  channelKey?: string;

  /**
   * The unique ID of the content in your database.
   */
  contentId?: string;

  /**
   * For example the ID of a chat room or a post
   */
  contextId?: string;

  /**
   * Do not store the content. The content won't enter the review queue
   */
  doNotStore?: boolean;

  /**
   * Any metadata you want to store with the content
   */
  metadata?: { [key: string]: unknown };
}

export interface ModerateAnalyzeImageParams {
  /**
   * The URL of the image you want to analyze.
   */
  url: string;

  /**
   * The author of the content.
   */
  authorId?: string;

  /**
   * The key of the channel.
   */
  channelKey?: string;

  /**
   * The unique ID of the content in your database.
   */
  contentId?: string;

  /**
   * For example the ID of a chat room or a post
   */
  contextId?: string;

  /**
   * Do not store the content. The content won't enter the review queue
   */
  doNotStore?: boolean;

  /**
   * Any metadata you want to store with the content
   */
  metadata?: { [key: string]: unknown };
}

export interface ModerateAnalyzeObjectParams {
  /**
   * The object you want to analyze.
   */
  value: ModerateAnalyzeObjectParams.Value;

  /**
   * The author of the content.
   */
  authorId?: string;

  /**
   * The key of the channel.
   */
  channelKey?: string;

  /**
   * The unique ID of the content in your database.
   */
  contentId?: string;

  /**
   * For example the ID of a chat room or a post
   */
  contextId?: string;

  /**
   * Do not store the content. The content won't enter the review queue
   */
  doNotStore?: boolean;

  /**
   * Any metadata you want to store with the content
   */
  metadata?: { [key: string]: unknown };
}

export namespace ModerateAnalyzeObjectParams {
  /**
   * The object you want to analyze.
   */
  export interface Value {
    data: { [key: string]: Value.Data };

    /**
     * The type of the object you want to analyze.
     */
    type: 'profile' | 'event' | 'product' | 'object';
  }

  export namespace Value {
    export interface Data {
      /**
       * The type of content (e.g., "text", "image", "video")
       */
      type: 'text' | 'image' | 'video' | 'audio';

      /**
       * The content to analyze
       */
      value: string;

      /**
       * Optional array of specific model IDs to use
       */
      modelIds?: Array<string>;
    }
  }
}

export interface ModerateAnalyzeTextParams {
  /**
   * The text you'd like to analyze. We recommend to submit plain text or HTML
   */
  value: string;

  /**
   * The author of the content.
   */
  authorId?: string;

  /**
   * The key of the channel.
   */
  channelKey?: string;

  /**
   * The unique ID of the content in your database.
   */
  contentId?: string;

  /**
   * For example the ID of a chat room or a post
   */
  contextId?: string;

  /**
   * Do not store the content. The content won't enter the review queue
   */
  doNotStore?: boolean;

  /**
   * Any metadata you want to store with the content
   */
  metadata?: { [key: string]: unknown };
}

export interface ModerateAnalyzeVideoParams {
  /**
   * The URL of the video you want to analyze.
   */
  url: string;

  /**
   * The author of the content.
   */
  authorId?: string;

  /**
   * The key of the channel.
   */
  channelKey?: string;

  /**
   * The unique ID of the content in your database.
   */
  contentId?: string;

  /**
   * For example the ID of a chat room or a post
   */
  contextId?: string;

  /**
   * Do not store the content. The content won't enter the review queue
   */
  doNotStore?: boolean;

  /**
   * Any metadata you want to store with the content
   */
  metadata?: { [key: string]: unknown };
}

export declare namespace Moderate {
  export {
    type ModerateAnalyzeResponse as ModerateAnalyzeResponse,
    type ModerateAnalyzeAudioResponse as ModerateAnalyzeAudioResponse,
    type ModerateAnalyzeImageResponse as ModerateAnalyzeImageResponse,
    type ModerateAnalyzeObjectResponse as ModerateAnalyzeObjectResponse,
    type ModerateAnalyzeTextResponse as ModerateAnalyzeTextResponse,
    type ModerateAnalyzeVideoResponse as ModerateAnalyzeVideoResponse,
    type ModerateAnalyzeParams as ModerateAnalyzeParams,
    type ModerateAnalyzeAudioParams as ModerateAnalyzeAudioParams,
    type ModerateAnalyzeImageParams as ModerateAnalyzeImageParams,
    type ModerateAnalyzeObjectParams as ModerateAnalyzeObjectParams,
    type ModerateAnalyzeTextParams as ModerateAnalyzeTextParams,
    type ModerateAnalyzeVideoParams as ModerateAnalyzeVideoParams,
  };
}
