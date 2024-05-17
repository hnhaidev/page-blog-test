import React from 'react';
import * as Yup from 'yup';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

import { Button, Editor, FormItem, Input, Textarea } from '../../../components';
import Upload from '../../../components/upload';
import { TBlog, TBlogPost } from '../../../utils/types/blog';
import { useCreateBlogMutation, useEditBlogMutation } from '../../../services';
import { SITE_MAP } from '../../../utils/constants/site-map';

export const UpsertBlog = ({ item }: { item?: TBlog }) => {
  const navigate = useNavigate();
  const [createBlog, { isLoading }] = useCreateBlogMutation();
  const [editBlog, { isLoading: isLoadingEdit }] = useEditBlogMutation();

  const validationSchema = Yup.object().shape({
    title: Yup.string().required('Post title is required!'),
    content: Yup.string().required('Content is required!'),
    thumbnail: Yup.string().required('Thumbnail is required!'),
    description: Yup.string(),
  });

  const form = useForm<TBlogPost>({
    defaultValues: {
      content: '',
      description: '',
      thumbnail: '',
      title: '',
    },
    resolver: yupResolver(validationSchema),
  });

  React.useEffect(() => {
    if (item) {
      form.setValue('title', item?.title);
      form.setValue('content', item?.content);
      form.setValue('description', item?.description || '');
      form.setValue('thumbnail', item?.thumbnail);
    }
  }, [item]);

  const onSubmit = (data: TBlogPost) => {
    console.log('🚀 ~ onSubmit ~ data:', data);

    const body = {
      content: '$mockData',
      description: '$mockData',
      thumbnail: '$mockData',
      title: '$mockData',
      createdAt: '$mockData',
    };
    if (item) {
      editBlog({ id: item.id, ...body })
        .unwrap()
        .then(() => {
          toast.success('Update blog successfully!');
          navigate(SITE_MAP.HOME.path);
        })
        .catch((error) => {
          toast.error(typeof error.data === 'string' ? error.data : error.data?.msg);
        });
    } else {
      createBlog(body)
        .unwrap()
        .then(() => {
          toast.success('Create new blog successfully!');
          navigate(SITE_MAP.HOME.path);
        })
        .catch((error) => {
          toast.error(typeof error.data === 'string' ? error.data : error.data?.msg);
        });
    }
  };

  const loading = isLoading || isLoadingEdit;

  return (
    <div className="card p-4">
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormItem>
          <Controller
            name="title"
            control={form.control}
            render={({ field }) => (
              <Input
                className="col"
                label="Post title"
                required
                id="title"
                {...field}
                errorMessage={form.formState.errors.title?.message?.toString()}
                disabled={loading}
              />
            )}
          />
        </FormItem>
        <FormItem>
          <Controller
            name="description"
            control={form.control}
            render={({ field }) => (
              <Textarea
                className="col"
                label="Description"
                id="description"
                rows={3}
                {...field}
                errorMessage={form.formState.errors.description?.message?.toString()}
                disabled={loading}
              />
            )}
          />
        </FormItem>
        <FormItem>
          <Controller
            name="content"
            control={form.control}
            render={({ field }) => (
              <Editor
                label="Content"
                required
                onChange={(value) => {
                  field.onChange(value === '<p><br></p>' ? undefined : value);
                }}
                value={field.value}
                errorMessage={form.formState.errors.content?.message}
                readOnly={loading}
              />
            )}
          />
        </FormItem>
        <FormItem>
          <Controller
            name="thumbnail"
            control={form.control}
            render={({ field }) => (
              <Upload
                label="Thumbnail"
                valuePreview={field.value}
                onChange={(value) => {
                  field.onChange(value ? value.preview : undefined);
                }}
                errorMessage={form.formState.errors.thumbnail?.message}
                disabled={loading}
              />
            )}
          />
        </FormItem>
        <div className="d-flex justify-content-end">
          <Button className="btn-primary" type="submit" loading={loading}>
            {item ? 'Save Changes' : 'Create Post'}
          </Button>
        </div>
      </form>
    </div>
  );
};
